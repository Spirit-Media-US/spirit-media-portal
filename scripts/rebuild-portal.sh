#!/bin/bash
# Rebuilds the portal with fresh prospect-stats data and uploads to CF Pages.
#
# Called (async) by the Tools API rebuild-portal endpoint when the Refresh
# button is clicked on /prospect-stats. Output is written to a log file so the
# endpoint can return immediately.

set -e

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

  echo "[$(date -Is)] Uploading dist/ to Cloudflare Pages..."
  /home/deploy/bin/deploy-preview.sh --skip-push

  echo "[$(date -Is)] Rebuild complete."
} >"$LOG" 2>&1

echo "$LOG"
