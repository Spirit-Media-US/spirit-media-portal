import { d as createAstro, e as createComponent, j as renderHead, r as renderTemplate } from '../chunks/astro/server_CE8Lg1Vy.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                     */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://spirit-media-portal.netlify.app");
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const error = Astro2.url.searchParams.get("error");
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login | Spirit Media Portal</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-navy text-white min-h-screen flex items-center justify-center font-sans"> <div class="w-full max-w-md"> <!-- Card --> <div class="bg-navy border border-gold border-opacity-30 rounded-lg p-8" style="background:rgba(15,23,42,0.95)"> <!-- Logo --> <div class="text-center mb-8"> <h1 class="text-4xl font-bold"> <span class="text-white">Spirit</span> <span class="text-gold">Media</span> </h1> <p class="text-gray-400 text-sm mt-2">Portal</p> </div> <!-- Form --> <form method="POST" action="/api/auth" class="space-y-6"> <div> <label for="pin" class="block text-sm font-semibold text-gray-300 mb-2">
Enter PIN
</label> <input type="password" id="pin" name="pin" required placeholder="••••••" class="w-full px-4 py-3 bg-white bg-opacity-10 border border-gold border-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 text-white placeholder-gray-500 text-center text-lg tracking-widest" autocomplete="off"> </div> ${error && renderTemplate`<div class="bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 rounded-lg p-3 text-red-300 text-sm text-center">
Invalid PIN. Please try again.
</div>`} <button type="submit" class="w-full px-4 py-3 bg-gold text-navy font-bold rounded-lg hover:bg-opacity-90 transition duration-200 text-lg">
Enter Portal
</button> </form> <!-- Footer --> <p class="text-center text-gray-500 text-xs mt-8">
Spirit Media Confidential
</p> </div> </div> </body></html>`;
}, "/home/deploy/Sites/spirit-media-portal/src/pages/login.astro", void 0);

const $$file = "/home/deploy/Sites/spirit-media-portal/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
