import { d as createAstro, e as createComponent, j as renderHead, n as renderSlot, r as renderTemplate } from './astro/server_CE8Lg1Vy.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */
/* empty css                             */

const $$Astro = createAstro("https://spirit-media-portal.netlify.app");
const $$PortalLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortalLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-lul3bfgs> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Spirit Media Portal</title><!-- Shared Spirit Media brand tokens --><link rel="stylesheet" href="https://spiritmediapublishing.com/spirit-media-tokens.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-lul3bfgs> <div class="portal-wrap" data-astro-cid-lul3bfgs> <!-- Sidebar --> <nav class="portal-sidebar" data-astro-cid-lul3bfgs> <div class="portal-logo" data-astro-cid-lul3bfgs> <span class="logo-spirit" data-astro-cid-lul3bfgs>Spirit</span> <span class="logo-media" data-astro-cid-lul3bfgs>Media</span> <div class="logo-sub" data-astro-cid-lul3bfgs>PORTAL</div> </div> <div class="portal-nav" data-astro-cid-lul3bfgs> <a href="/dashboard" class="portal-nav-link" data-astro-cid-lul3bfgs>Dashboard</a> <a href="/playbook" class="portal-nav-link" data-astro-cid-lul3bfgs>Playbook</a> <a href="/developers" class="portal-nav-link" data-astro-cid-lul3bfgs>Developers</a> <a href="/clients" class="portal-nav-link" data-astro-cid-lul3bfgs>Clients</a> </div> <div class="portal-sidebar-footer" data-astro-cid-lul3bfgs> <a href="/logout" class="portal-logout" data-astro-cid-lul3bfgs>Logout</a> </div> </nav> <!-- Main --> <main class="portal-main" data-astro-cid-lul3bfgs> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "/home/deploy/Sites/spirit-media-portal/src/layouts/PortalLayout.astro", void 0);

export { $$PortalLayout as $ };
