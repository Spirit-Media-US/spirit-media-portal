# Spirit Media Portal

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: Spirit Media Portal | Repo: github.com/Spirit-Media-US/spirit-media-portal | Domain: portal.spiritmediapublishing.com | PIN: 060622

## Dev Commands

- `npm run dev` — local preview at localhost:4326
- `npm run build` — runs `astro check && astro build`

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

## Status — as of 2026-03-24

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
