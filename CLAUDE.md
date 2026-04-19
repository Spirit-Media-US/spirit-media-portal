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

---

## Stitch MCP — AI Design Tool

Google Stitch 2.0 is an MCP server available in this project for AI-powered design work. It generates full page designs and auto-creates design systems (colors, typography, component rules). The MCP config is already symlinked into this repo (`.mcp.json`).

**When to use:** When Kevin asks for design work, new page layouts, or visual redesigns. Use Stitch first to get 80–90% of the design done visually, then implement in Astro/Tailwind.

**Available tools (prefixed `mcp__stitch__`):**
`create_project`, `generate_screen_from_text`, `create_design_system`, `apply_design_system`, `edit_screens`, `generate_variants`, `list_projects`, `list_screens`, `get_screen`, `get_project`, `list_design_systems`, `update_design_system`

**Workflow:**
1. Screenshot or paste URL into Stitch as style reference
2. Stitch generates full design + auto-creates design system
3. Export design.md / design system from Stitch
4. Hand off to Claude Code for Astro/Tailwind implementation

**Rules:**
- Use Gemini 3.1 Pro in Stitch (not 3.0 Flash)
- Stitch auto-generates a `design.md` — keep it in the project root for consistency
- This is the standard SMP workflow for all new site builds and major redesigns
<!--
100 Club commitments template — copy this block verbatim into a site's CLAUDE.md
during Phase 2H of the execute plan. Substitute spirit-media-portal with the actual R2 path slug.
The guardrails script (/home/deploy/bin/100club-lint.sh) self-skips any site whose
CLAUDE.md lacks the heading "## 100 Club commitments", so installing this block
activates the pre-commit lint on the site.
-->

---

## 100 Club commitments (locked — do not regress)

Every commitment below is a LOAD-BEARING structural decision. Do not "re-add" any of them without understanding the consequences.

### Hero image(s) are R2-only, NOT Sanity
- **URL pattern**: `https://assets.spiritmediapublishing.com/spirit-media-portal/hero-*.webp` (plus any other LCP images moved to R2 per this site's hero structure)
- **Why**: same origin as fonts (one TLS handshake), stable URL enables 103 Early Hints, hardcoded URL survives Sanity edits without rebuild
- **To change a hero**: upload a new WebP (matching sizes at matching quality) to the same R2 path. Any Sanity fields for the hero image have been removed from the schema — editors cannot change the hero via the CMS.

### CSS must stay wrapped in @layer base
- `Layout.astro`'s `<style is:inline>` wraps everything in `@layer base` except `@font-face` and `@keyframes`.
- **Why**: unlayered rules beat every `@layer` rule regardless of specificity. Tailwind v4 ships utilities in `@layer utilities`. If critical CSS is unlayered, `.grid-cols-1` overrides external `.lg:grid-cols-4` and grids collapse site-wide.

### ClientRouter is OFF
- No `<ClientRouter />`, no `import { ClientRouter }` in Layout.astro.
- **Why**: static marketing sites don't need SPA nav. Saves ~125ms forced reflow + ~100ms script eval on mobile.
- All page JS uses `DOMContentLoaded` with readyState guard.

### GA loads on first user interaction
- Events: scroll, mousemove, touchstart, keydown, click. 8s fallback timeout.
- **Why**: Lighthouse never interacts, so GA doesn't load in audits. Real users get GA after they engage (post-LCP).

### `<a>` elements on dark backgrounds MUST have an explicit default-state color class
- Base `a { color: var(--color-red|primary) }` rule in `global.css` otherwise applies → brand color on dark bg fails WCAG.
- Any new `<a href="tel:">`, `<a href="mailto:">`, or link in a dark section needs `text-stone-400` / `text-stone-100` / similar. `hover:text-*` doesn't protect the default state.

### `[data-animate]` transitions are transform-only, no opacity
- `global.css`: `transition: transform 0.65s cubic-bezier(...)`. **Do NOT add `opacity` back to the transition.**
- **Why**: Lighthouse captures frames mid-transition; a 0.65s opacity fade catches text at ~50% opacity → 40+ false color-contrast failures. Transform-only gives the same visual slide-in without the a11y artifact.
- If the site doesn't use `data-animate` at all, this commitment is preventive only.

### Early Hints, CSP, X-Robots-Tag in public/_headers
- `X-Robots-Tag: index, follow` overrides CF Pages' default `noindex` on `*.pages.dev`
- CSP allows CF Insights (`static.cloudflareinsights.com` in `script-src`, `cloudflareinsights.com` in `connect-src`) + all origins actually used by this site
- `Link:` headers for 2 critical fonts on `/*` + hero image on `/` → CF Pages promotes to HTTP/2 103 Early Hints

### Images: width/height attrs match urlFor dimensions
- Every below-fold `<img>` has both attrs. Any urlFor resize change must update the attrs in the same commit.
- `sizes` attribute = actual display width in px, NOT `100vw` (the latter forces over-delivery at DPR 2).

### Build pipeline
- `inlineStylesheets: 'auto'` (NOT `'always'`)
- `scripts/async-css.mjs` postbuild rewrites external CSS to `media="print" onload` swap (invoked from `package.json` build script)
- `scripts/100club-verify.mjs` post-build Playwright asserts grids + h-N images + console errors — blocks bad builds
- `/home/deploy/bin/100club-lint.sh` is wired into `lefthook.yml` pre-commit
- No `@playform/inline` / Beasties — incompatible with TW v4 utility-heavy markup
