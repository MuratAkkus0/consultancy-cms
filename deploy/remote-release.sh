#!/usr/bin/env bash
#
# Runs ON THE VPS. Streamed via: ssh vps 'bash -s' -- <sha> < this-file
#
# NEVER use 'set -x' here: the trace would leak env values into the Actions log.
set -euo pipefail

APP_ROOT="/srv/consultancy-cms"
CURRENT_LINK="$APP_ROOT/current"
RELEASE_SHA="${1:?"release sha is required"}"
RELEASES_DIR="$APP_ROOT/releases"
RELEASE_DIR="$RELEASES_DIR/$RELEASE_SHA"
SHARED_DIR="$APP_ROOT/shared"
SERVICE_NAME="consultancy-cms.service"
KEEP_RELEASES=5

PREVIOUS_RELEASE=""

# Strapi's own endpoint, answered by the app itself rather than by nginx.
APP_PORT=1337
HEALTH_URL="http://127.0.0.1:$APP_PORT/_health"

# Strapi needs noticeably longer than a plain node app to accept connections.
HEALTH_ATTEMPTS=18

check_health() {
  for attempt in $(seq 1 "$HEALTH_ATTEMPTS"); do
    if curl \
      --fail \
      --silent \
      --show-error \
      "$HEALTH_URL" >/dev/null; then
      echo "Application is healthy."
      return 0
    fi
    echo "Health check failed (attempt $attempt/$HEALTH_ATTEMPTS)"
    sleep 5
  done
  return 1
}

# Read the live target before the flip; rollback has no other way back.
if [ -L "$CURRENT_LINK" ]; then
  PREVIOUS_RELEASE="$(readlink -f "$CURRENT_LINK")"
  echo "Previous release found. PREVIOUS_RELEASE=$PREVIOUS_RELEASE"
else
  echo "No previous release available."
fi

if [ ! -d "$RELEASE_DIR" ]; then
  echo "Release directory $RELEASE_DIR not found." >&2
  exit 1
fi

if [ ! -f "$SHARED_DIR/.env" ]; then
  echo ".env file not found in $SHARED_DIR" >&2
  exit 1
fi

for d in uploads database-migrations home; do
  if [ ! -d "$SHARED_DIR/$d" ]; then
    echo "$d directory not found in $SHARED_DIR" >&2
    exit 1
  fi
done

# systemd's EnvironmentFile always beats the unit's Environment= lines, so the
# env file is the only thing deciding which interface Strapi binds to. Refuse an
# env file that would expose the admin panel straight to the internet.
if ! grep -qE '^HOST=127\.0\.0\.1[[:space:]]*$' "$SHARED_DIR/.env"; then
  echo "Refusing to deploy: .env must set HOST=127.0.0.1 (nginx fronts the CMS)." >&2
  echo "Found: $(grep -E '^HOST=' "$SHARED_DIR/.env" || echo '(no HOST line)')" >&2
  exit 1
fi

cd "$RELEASE_DIR"
npm ci --omit=dev

# Uploaded media lives outside the release: a new release would otherwise ship
# an empty uploads directory and every existing image would 404.
rm -rf "$RELEASE_DIR/public/uploads"
ln -sfn "$SHARED_DIR/uploads" "$RELEASE_DIR/public/uploads"
echo "Uploads linked into release dir."

# Strapi creates database/migrations on boot and writes migration records there.
# That is state, not code: it must outlive the release and be writable by the
# service, which the release tree deliberately is not.
mkdir -p "$RELEASE_DIR/database"
rm -rf "$RELEASE_DIR/database/migrations"
ln -sfn "$SHARED_DIR/database-migrations" "$RELEASE_DIR/database/migrations"
echo "Migrations directory linked into release dir."

ln -sfn "$RELEASE_DIR" "$CURRENT_LINK"
echo "Current version link updated."

sudo systemctl restart "$SERVICE_NAME"
echo "Service restarted."

if check_health; then
  echo "Deployment successful."

  # Both sides go through readlink -f so the trailing slash from 'ls -dt */'
  # does not break the comparison.
  CURRENT_TARGET="$(readlink -f "$CURRENT_LINK")"

  ls -dt "$RELEASES_DIR"/*/ | tail -n +$((KEEP_RELEASES + 1)) | while read -r dir; do
    dir="$(readlink -f "$dir")"

    # A rollback can leave an older release live; never prune it.
    if [ "$dir" = "$CURRENT_TARGET" ]; then
      echo "Skipping live release $dir"
      continue
    fi

    rm -rf "$dir"
    echo "Pruned old release $dir"
  done
else
  if [ -z "$PREVIOUS_RELEASE" ]; then
    echo "No previous release to roll back to." >&2
    exit 1
  fi

  ln -sfn "$PREVIOUS_RELEASE" "$CURRENT_LINK"
  echo "Current version link updated to previous version."

  sudo systemctl restart "$SERVICE_NAME"
  echo "Service restarted."

  if check_health; then
    echo "Rollback successful. Live version $PREVIOUS_RELEASE"
  else
    echo "Rollback failed for release $PREVIOUS_RELEASE - manual action needed." >&2
  fi

  exit 1
fi
