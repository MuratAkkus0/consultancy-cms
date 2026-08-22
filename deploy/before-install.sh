#!/usr/bin/env bash
set -euo pipefail

SERVICE_NAME="milestonegermany-cms.service"

# Dosyalar uzerine yazilmadan once uygulamayi durdur.
# Aksi halde npm ci calisan surecin node_modules'unu silip
# systemd'yi restart dongusune sokar.
if systemctl list-unit-files | grep -q "^${SERVICE_NAME}"; then
  systemctl stop "$SERVICE_NAME" || true
fi
