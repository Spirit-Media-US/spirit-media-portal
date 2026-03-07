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
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Spirit Media Portal</title><!-- Shared Spirit Media brand tokens & design system --><link rel="stylesheet" href="https://spiritmediapublishing.com/spirit-media-global.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-navy text-white font-sans"> <div class="flex h-screen"> <!-- Sidebar Navigation --> <nav class="w-64 bg-navy border-r border-gold border-opacity-20 flex flex-col"> <!-- Logo --> <div class="px-6 py-8 border-b border-gold border-opacity-20"> <h1 class="text-2xl font-bold"> <span>Spirit</span> <span class="text-gold">Media</span> </h1> <p class="text-gold text-xs font-semibold mt-2 uppercase tracking-wider">Portal</p> </div> <!-- Navigation Links --> <div class="flex-1 px-6 py-8"> <div class="space-y-2"> <a href="/dashboard" class="block px-4 py-3 rounded-lg hover:bg-gold hover:bg-opacity-10 transition text-gray-300 hover:text-gold font-600">
Dashboard
</a> <a href="/playbook" class="block px-4 py-3 rounded-lg hover:bg-gold hover:bg-opacity-10 transition text-gray-300 hover:text-gold font-600">
Playbook
</a> <a href="/developers" class="block px-4 py-3 rounded-lg hover:bg-gold hover:bg-opacity-10 transition text-gray-300 hover:text-gold font-600">
Developers
</a> <a href="/clients" class="block px-4 py-3 rounded-lg hover:bg-gold hover:bg-opacity-10 transition text-gray-300 hover:text-gold font-600">
Clients
</a> </div> </div> <!-- Logout Button --> <div class="px-6 py-8 border-t border-gold border-opacity-20"> <a href="/logout" class="w-full block px-4 py-3 bg-gold bg-opacity-20 text-gold rounded-lg hover:bg-opacity-30 transition text-center font-600">
Logout
</a> </div> </nav> <!-- Main Content --> <main class="flex-1 overflow-auto"> <div class="px-12 py-12"> ${renderSlot($$result, $$slots["default"])} </div> </main> </div> </body></html>`;
}, "/home/deploy/Sites/spirit-media-portal/src/layouts/PortalLayout.astro", void 0);

export { $$PortalLayout as $ };
