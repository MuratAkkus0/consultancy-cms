#!/usr/bin/env bash
set -euo pipefail

SSM_PATH="/milestonegermany_cms/prod/"
AWS_REGION="eu-central-1"

ENV_EXPORTS="$(
  aws ssm get-parameters-by-path \
    --path "$SSM_PATH" --recursive --with-decryption \
    --region "$AWS_REGION" --output json \
  | jq -r '.Parameters[] | "export \(.Name | split("/") | last)=\(.Value | @sh)"'
)"

# Bos donen bir SSM cagrisi, Strapi'yi APP_KEYS'siz baslatip
# anlamsiz bir hatayla dusurur. Sessizce devam etmek yerine burada dur.
if [ -z "$ENV_EXPORTS" ]; then
  echo "No SSM parameters found under $SSM_PATH ($AWS_REGION)." >&2
  exit 1
fi

eval "$ENV_EXPORTS"

export NODE_ENV="${NODE_ENV:-production}"

exec /usr/bin/npm start
