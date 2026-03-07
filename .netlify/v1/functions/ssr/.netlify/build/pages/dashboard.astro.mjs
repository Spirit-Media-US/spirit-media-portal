import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_CE8Lg1Vy.mjs';
import 'piccolore';
import { $ as $$PortalLayout } from '../chunks/PortalLayout_ByIjvmfz.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const sites = [
    { name: "Spirit Media Publishing", slug: "smp", netlify: "spiritmediapublishing.netlify.app", sanity: "spiritmediapublishing.sanity.studio", liveUrl: "spiritmediapublishing.com" },
    { name: "Father's Heart Bible", slug: "fhb", netlify: "fathersheartbible.netlify.app", sanity: "fathersheartbible.sanity.studio", liveUrl: "fathersheartbible.org" },
    { name: "Work On Yourself", slug: "woy", netlify: "workonyourself.netlify.app", sanity: "workonyourself.sanity.studio", liveUrl: "workonyourself.com" },
    { name: "Arts By Justin", slug: "artsbyjustin", netlify: "artsbyjustin.netlify.app", sanity: "artsbyjustin.sanity.studio", liveUrl: "artsbyjustin.com" },
    { name: "The Kohler Group", slug: "kohler", netlify: "thekohlergroup.netlify.app", sanity: "thekohlergroup.sanity.studio", liveUrl: "thekohlergroup.net" }
  ];
  return renderTemplate`${renderComponent($$result, "PortalLayout", $$PortalLayout, { "title": "Dashboard", "data-astro-cid-3nssi2tu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-header" data-astro-cid-3nssi2tu> <h1 data-astro-cid-3nssi2tu>Dashboard</h1> <p data-astro-cid-3nssi2tu>Site inventory and management links</p> </div> <div class="sites-grid" data-astro-cid-3nssi2tu> ${sites.map((site) => renderTemplate`<div class="site-card" data-astro-cid-3nssi2tu> <div class="site-card-header" data-astro-cid-3nssi2tu> <h2 data-astro-cid-3nssi2tu>${site.name}</h2> <code class="site-slug" data-astro-cid-3nssi2tu>${site.slug}</code> </div> <div class="site-links" data-astro-cid-3nssi2tu> <a${addAttribute(`https://${site.liveUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="site-link" data-astro-cid-3nssi2tu> <span data-astro-cid-3nssi2tu>Live Website</span> <span class="link-url" data-astro-cid-3nssi2tu>${site.liveUrl} →</span> </a> <a${addAttribute(`https://app.netlify.com/projects/${site.netlify.split(".")[0]}`, "href")} target="_blank" rel="noopener noreferrer" class="site-link" data-astro-cid-3nssi2tu> <span data-astro-cid-3nssi2tu>Netlify Admin</span> <span class="link-action" data-astro-cid-3nssi2tu>Manage →</span> </a> <a${addAttribute(`https://${site.sanity}`, "href")} target="_blank" rel="noopener noreferrer" class="site-link" data-astro-cid-3nssi2tu> <span data-astro-cid-3nssi2tu>Sanity Studio</span> <span class="link-action" data-astro-cid-3nssi2tu>Edit Content →</span> </a> </div> </div>`)} </div> ` })} `;
}, "/home/deploy/Sites/spirit-media-portal/src/pages/dashboard.astro", void 0);

const $$file = "/home/deploy/Sites/spirit-media-portal/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
