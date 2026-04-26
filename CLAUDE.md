# Spirit Media Portal

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: Spirit Media Portal | Repo: github.com/Spirit-Media-US/spirit-media-portal | Domain: portal.spiritmediapublishing.com | PIN: 060622

**Migration protocol:** /home/deploy/bin/tools-api/pipelines/migration/CLAUDE.md

## Dev Commands

- `npm run dev` — local preview at localhost:4326
- `npm run build` — runs `astro check && astro build`
- `portal-health-check.sh` — post-deploy health check (runs automatically after `git pushd`)

## Environment Variables — CRITICAL

Portal API routes need `TOOLS_API_URL` and `TOOLS_API_SECRET` to reach the Tools API.

- **`TOOLS_API_URL`** — set in `wrangler.toml` `[vars]` (not sensitive, available in all environments)
- **`TOOLS_API_SECRET`** — set as CF Pages secret for BOTH production and preview environments

If API routes return `undefined` errors or 502, the env vars are missing. Fix via CF API:
```bash
source /home/deploy/.secrets && source /home/deploy/bin/.env && source /home/deploy/bin/tools-api/.env
curl -s -X PATCH "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/spirit-media-portal" \
  -H "Authorization: Bearer $CLOUDFLARE_PAGES_TOKEN" -H "Content-Type: application/json" \
  -d "{\"deployment_configs\":{\"preview\":{\"env_vars\":{\"TOOLS_API_SECRET\":{\"value\":\"$TOOLS_API_SECRET\",\"type\":\"secret_text\"}}}}}"
```

## Mandatory — Before Starting Work
Always start Claude sessions from inside this directory:
```
cd /srv/sites/spirit-media-portal && claude
```
Running Claude from ~/ or ~/Sites/ bypasses this project's CLAUDE.md. A pre-edit hook enforces this, but following the workflow prevents warnings and ensures all project rules are loaded.

Then run: `git checkout dev && git pull origin dev`

## Architecture

- PIN-protected internal tool (PIN: 060622) — not a public site
- Python Flask API server at `/home/deploy/bin/tools-api/server.py` (port 4327) — runs 24/7 on Bethel
- Project registry at `/home/deploy/bin/.projects/registry.json` — tracks all pipeline instances
- API routes at `src/pages/api/tools-*.ts` — proxy to Flask

## Pages & Features

- **Dashboard** — active projects registry with live status cards
- **Pipelines** (formerly Templates) — 3 pipeline types:
  - Website Migration (Steps 1/2/3 → Proposal → Bootstrap → Pre-Launch QA)
  - Manuscript Review Generator
  - SMP Blog Post Publisher
- **Playbook** — full 8-phase SMP Build Protocol reference
- **Connecting** — team communication + GHL integration docs
- **Developers** — technical reference for the dev team
- **Task Log** — project task tracking
- **Clients** — client guide (sent to clients at Phase 7)
- **Design Library** — SMP brand + design system reference

## Status — as of 2026-04-08

### Completed & Live on Main
- PIN login with session cookie auth
- Dashboard with project registry grid — active projects show with phase/status
- Pipelines page: 3 labeled sections (Website Migration, Manuscript Review, SMP Blogs)
- Website Migration pipeline: Step 1 (Proposal), Step 2 (Bootstrap), Step 3 (Pre-Launch QA) all wired to Flask
- Flask server: phase field added to registry (phase 1→2→6/7 on QA pass/fail)
- Playbook: full 8-phase SMP Build Protocol with Audit Gate
- Git hygiene: Lefthook hooks, full .gitignore
- SessionStart hook: auto-pull on session start
- SessionEnd hook: WIP auto-save commit + session log

### Still Pending
- Manuscript Review and Blog pipelines: UI wired, backend routes need expansion
- Task Log: UI exists, backend persistence TBD

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Never push without local preview first
