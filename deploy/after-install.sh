#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/home/admin/consultancy-cms"
SERVICE_NAME="milestonegermany-cms.service"

chown -R admin:admin "$APP_DIR"

cd "$APP_DIR"

npm ci --omit=dev

install \
  -m 0644 \
  "$APP_DIR/deploy/$SERVICE_NAME" \
  "/etc/systemd/system/$SERVICE_NAME"

chmod +x "$APP_DIR/deploy/start.sh"
chmod +x "$APP_DIR/deploy/start-service.sh"
chmod +x "$APP_DIR/deploy/validate-service.sh"

systemctl daemon-reload
systemctl enable "$SERVICE_NAME"