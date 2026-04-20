#!/bin/bash
# Rebuilds the portal with fresh prospect-stats data and uploads to CF Pages.
#
# Called (async) by the Tools API rebuild-portal endpoint when the Refresh
# button is clicked on /prospect-stats. Output is written to a log file so the
# endpoint can return immediately.

set -e

export PATH="/home/deploy/.nvm/versions/node/v22.22.1/bin:$PATH"

REPO="/srv/sites/spirit-media-portal"
LOG="/tmp/portal-rebuild-$(date +%Y%m%d-%H%M%S).log"

{
  echo "[$(date -Is)] Starting portal rebuild..."
  cd "$REPO"

  echo "[$(date -Is)] Running build (includes prebuild fetch)..."
  # Provide env vars so the prebuild script can hit the local Tools API.
  set +e
  . /home/deploy/.secrets 2>/dev/null
  . /home/deploy/bin/tools-api/.env 2>/dev/null
  set -e
  export TOOLS_API_URL="http://localhost:4327"
  export TOOLS_API_SECRET
  npm run build

  # Deploy to BOTH branches so the Refresh button works the same whether
  # the user clicked it on the dev preview or on production.
  export CLOUDFLARE_ACCOUNT_ID=193f7a497a37609cd0be366ecbb19122
  export CLOUDFLARE_API_TOKEN="$CLOUDFLARE_PAGES_TOKEN"

  for TARGET in dev main; do
    echo "[$(date -Is)] Uploading dist/ to Cloudflare Pages ($TARGET)..."
    npx wrangler pages deploy dist/ \
      --project-name=spirit-media-portal \
      --branch="$TARGET" \
      --commit-dirty=true 2>&1 | tail -3
  done

  echo "[$(date -Is)] Rebuild complete."
} >"$LOG" 2>&1

echo "$LOG"
