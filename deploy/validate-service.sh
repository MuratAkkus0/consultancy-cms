#!/usr/bin/env bash
set -euo pipefail

# Strapi'nin kendi health endpoint'i (204 doner).
# Nginx degil, uygulamanin kendisi kontrol edilir.
URL="http://127.0.0.1:1337/_health"

for attempt in {1..18}; do
  if curl \
    --fail \
    --silent \
    --show-error \
    "$URL" > /dev/null; then

    echo "Application is healthy."
    exit 0
  fi

  echo "Health check failed (attempt $attempt/18)"
  sleep 5
done

echo "Application failed health validation. Recent service logs:"
journalctl -u milestonegermany-cms.service -n 50 --no-pager || true
exit 1
