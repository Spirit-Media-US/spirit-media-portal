import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, l as renderScript } from '../chunks/astro/server_CE8Lg1Vy.mjs';
import 'piccolore';
import { $ as $$PortalLayout } from '../chunks/PortalLayout_D4KKBHxh.mjs';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const sites = [
    {
      name: "Spirit Media Publishing",
      slug: "smp",
      netlify: "spiritmediapublishing.netlify.app",
      sanity: "spiritmediapublishing.sanity.studio",
      liveUrl: "spiritmediapublishing.com"
    },
    {
      name: "Fathers Heart Bible",
      slug: "fhb",
      netlify: "fathersheartbible.netlify.app",
      sanity: "fathersheartbible.sanity.studio",
      liveUrl: "fathersheartbible.org"
    },
    {
      name: "Work On Yourself",
      slug: "woy",
      netlify: "workonyourself.netlify.app",
      sanity: "workonyourself.sanity.studio",
      liveUrl: "workonyourself.com"
    },
    {
      name: "Arts By Justin",
      slug: "artsbyjustin",
      netlify: "artsbyjustin.netlify.app",
      sanity: "artsbyjustin.sanity.studio",
      liveUrl: "artsbyjustin.com"
    },
    {
      name: "The Kohler Group",
      slug: "kohler",
      netlify: "thekohlergroup.netlify.app",
      sanity: "thekohlergroup.sanity.studio",
      liveUrl: "thekohlergroup.net"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PortalLayout", $$PortalLayout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl"> <h1 class="text-4xl font-bold mb-2">Dashboard</h1> <p class="text-gray-400 mb-8">Site inventory and management links</p> <!-- Sites Grid --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> ${sites.map((site) => renderTemplate`<div class="bg-white bg-opacity-5 border border-gold border-opacity-20 rounded-lg p-6 hover:border-opacity-40 transition">  <div class="mb-6"> <h2 class="text-2xl font-bold text-white mb-2">${site.name}</h2> <div class="flex items-center gap-2"> <code class="text-sm bg-black bg-opacity-50 px-3 py-1 rounded text-gold font-mono"> ${site.slug} </code> <button class="copy-slug px-2 py-1 text-xs bg-gold bg-opacity-20 hover:bg-opacity-30 text-gold rounded transition"${addAttribute(site.slug, "data-slug")} title="Copy slug">
Copy
</button> </div> </div>  <div class="space-y-3">  <a${addAttribute(`https://${site.liveUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-3 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-lg transition group"> <span class="text-gray-300 font-semibold">Live Website</span> <span class="text-gold text-sm group-hover:underline">${site.liveUrl} →</span> </a>  <a${addAttribute(`https://app.netlify.com/sites/${site.netlify.split(".")[0]}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-3 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-lg transition group"> <span class="text-gray-300 font-semibold">Netlify Admin</span> <span class="text-gold text-sm group-hover:underline">Manage →</span> </a>  <a${addAttribute(`https://${site.sanity}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-3 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-lg transition group"> <span class="text-gray-300 font-semibold">Sanity Studio</span> <span class="text-gold text-sm group-hover:underline">Edit Content →</span> </a> </div>  <div class="mt-6 pt-6 border-t border-gold border-opacity-10"> <p class="text-xs text-gray-500 mb-2 font-semibold uppercase">Links</p> <div class="space-y-1 text-xs"> <p class="text-gray-400"> <span class="text-gold font-semibold">Netlify:</span>${" "} <code class="bg-black bg-opacity-50 px-2 py-0.5 rounded">${site.netlify}</code> </p> <p class="text-gray-400"> <span class="text-gold font-semibold">Sanity:</span>${" "} <code class="bg-black bg-opacity-50 px-2 py-0.5 rounded">${site.sanity}</code> </p> </div> </div> </div>`)} </div> <!-- Quick Reference --> <div class="mt-12 bg-gold bg-opacity-10 border border-gold border-opacity-40 rounded-lg p-8"> <h2 class="text-2xl font-bold text-gold mb-4">Quick Reference</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300"> <div> <h3 class="font-semibold text-gold mb-2">Live Website</h3> <p class="text-sm">Visit the public-facing website</p> </div> <div> <h3 class="font-semibold text-gold mb-2">Netlify Admin</h3> <p class="text-sm">Manage deployments and site settings</p> </div> <div> <h3 class="font-semibold text-gold mb-2">Sanity Studio</h3> <p class="text-sm">Edit and publish content</p> </div> </div> </div> </div> ${renderScript($$result2, "/home/deploy/Sites/spirit-media-portal/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")} ` })}`;
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
