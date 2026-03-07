import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_CE8Lg1Vy.mjs';
import 'piccolore';
import { $ as $$PortalLayout } from '../chunks/PortalLayout_BkmyhwS7.mjs';
export { renderers } from '../renderers.mjs';

const $$Developers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PortalLayout", $$PortalLayout, { "title": "Developers" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl"> <h1 class="text-4xl font-bold mb-2">Developer Onboarding</h1> <p class="text-gray-400 mb-8">Welcome Nathan! Here's everything you need to get started.</p> <div class="space-y-8"> <!-- SSH Access --> <section class="bg-white bg-opacity-5 border border-gold border-opacity-20 rounded-lg p-6"> <h2 class="text-2xl font-bold text-gold mb-4">SSH Access</h2> <p class="text-gray-400 mb-4">Connect to the development server via Tailscale:</p> <div class="bg-black bg-opacity-50 px-4 py-3 rounded font-mono text-sm text-gray-300 overflow-x-auto">
ssh deploy@100.114.220.65
</div> <p class="text-gray-500 text-sm mt-3">You'll need Tailscale VPN access first.</p> </section> <!-- Code Server --> <section class="bg-white bg-opacity-5 border border-gold border-opacity-20 rounded-lg p-6"> <h2 class="text-2xl font-bold text-gold mb-4">Code Server (VS Code in Browser)</h2> <p class="text-gray-400 mb-4">Browser-based IDE with full project access:</p> <a href="https://dev.spiritmediapublishing.com" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 bg-gold text-navy rounded font-600 hover:bg-opacity-90 transition">
Open Code Server
</a> <p class="text-gray-500 text-sm mt-3">Requires Tailscale VPN access</p> </section> <!-- GitHub Organization --> <section class="bg-white bg-opacity-5 border border-gold border-opacity-20 rounded-lg p-6"> <h2 class="text-2xl font-bold text-gold mb-4">GitHub Organization</h2> <p class="text-gray-400 mb-4"> <a href="https://github.com/Spirit-Media-US" target="_blank" rel="noopener noreferrer" class="text-gold hover:underline">
Spirit-Media-US
</a> </p> <div class="space-y-2"> <h3 class="font-semibold text-gray-300">Repositories:</h3> <ul class="space-y-1 text-gray-400"> <li>• <code class="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">spirit-media-publishing</code></li> <li>• <code class="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">FHB</code> (Fathers Heart Bible)</li> <li>• <code class="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">WOY</code> (Work On Yourself)</li> <li>• <code class="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">the-kohler-group</code></li> <li>• <code class="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">artsbyjustin</code></li> <li>• <code class="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">spirit-media-portal</code> (this site)</li> </ul> </div> </section> <!-- Sanity Project IDs --> <section class="bg-white bg-opacity-5 border border-gold border-opacity-20 rounded-lg p-6"> <h2 class="text-2xl font-bold text-gold mb-4">Sanity Project IDs</h2> <p class="text-gray-400 mb-4">For configuration and API calls:</p> <div class="space-y-2"> <div class="flex items-center justify-between bg-black bg-opacity-50 px-4 py-2 rounded"> <div> <p class="text-gray-300 font-semibold">Spirit Media Publishing</p> <code class="text-xs text-gray-500">pmowd8uo</code> </div> <button class="copy-btn px-3 py-1 bg-gold bg-opacity-20 hover:bg-opacity-30 text-gold rounded text-xs font-600" data-copy="pmowd8uo">
Copy
</button> </div> <div class="flex items-center justify-between bg-black bg-opacity-50 px-4 py-2 rounded"> <div> <p class="text-gray-300 font-semibold">Fathers Heart Bible</p> <code class="text-xs text-gray-500">rusi1hyi</code> </div> <button class="copy-btn px-3 py-1 bg-gold bg-opacity-20 hover:bg-opacity-30 text-gold rounded text-xs font-600" data-copy="rusi1hyi">
Copy
</button> </div> <div class="flex items-center justify-between bg-black bg-opacity-50 px-4 py-2 rounded"> <div> <p class="text-gray-300 font-semibold">Work On Yourself</p> <code class="text-xs text-gray-500">u8tg0g1c</code> </div> <button class="copy-btn px-3 py-1 bg-gold bg-opacity-20 hover:bg-opacity-30 text-gold rounded text-xs font-600" data-copy="u8tg0g1c">
Copy
</button> </div> <div class="flex items-center justify-between bg-black bg-opacity-50 px-4 py-2 rounded"> <div> <p class="text-gray-300 font-semibold">The Kohler Group</p> <code class="text-xs text-gray-500">2bom5gqg</code> </div> <button class="copy-btn px-3 py-1 bg-gold bg-opacity-20 hover:bg-opacity-30 text-gold rounded text-xs font-600" data-copy="2bom5gqg">
Copy
</button> </div> <div class="flex items-center justify-between bg-black bg-opacity-50 px-4 py-2 rounded"> <div> <p class="text-gray-300 font-semibold">Arts By Justin</p> <code class="text-xs text-gray-500">oqoqh3p3</code> </div> <button class="copy-btn px-3 py-1 bg-gold bg-opacity-20 hover:bg-opacity-30 text-gold rounded text-xs font-600" data-copy="oqoqh3p3">
Copy
</button> </div> </div> </section> <!-- Credentials --> <section class="bg-white bg-opacity-5 border border-gold border-opacity-20 rounded-lg p-6"> <h2 class="text-2xl font-bold text-gold mb-4">Credentials & Secrets</h2> <p class="text-gray-400 mb-2">All sensitive credentials are stored in:</p> <div class="bg-black bg-opacity-50 px-4 py-2 rounded font-mono text-sm text-gray-300 mb-4">
Bitwarden Vault
</div> <p class="text-gray-500 text-sm">
Ask a team lead for access. Never commit tokens or secrets to Git.
</p> </section> <!-- Quick Start --> <section class="bg-gold bg-opacity-10 border border-gold border-opacity-40 rounded-lg p-6"> <h2 class="text-2xl font-bold text-gold mb-4">Quick Start Checklist</h2> <ul class="space-y-2 text-gray-300"> <li>✓ Request Tailscale VPN access</li> <li>✓ Ask for Bitwarden vault invitation</li> <li>✓ SSH into the server: <code class="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">ssh deploy@100.114.220.65</code></li> <li>✓ Access Code Server: <a href="https://dev.spiritmediapublishing.com" class="text-gold hover:underline">dev.spiritmediapublishing.com</a></li> <li>✓ Clone repos from Spirit-Media-US org</li> <li>✓ Install dependencies: <code class="bg-black bg-opacity-50 px-2 py-1 rounded text-xs">npm install</code></li> <li>✓ Read the Playbook for deployment workflow</li> </ul> </section> <!-- Support --> <section class="bg-white bg-opacity-5 border border-gold border-opacity-20 rounded-lg p-6"> <h2 class="text-2xl font-bold text-gold mb-4">Need Help?</h2> <p class="text-gray-400">
Check the <a href="/playbook" class="text-gold hover:underline">Playbook</a> for architecture & workflows, or ask the team lead for questions.
</p> </section> </div> </div> ${renderScript($$result2, "/home/deploy/Sites/spirit-media-portal/src/pages/developers.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/deploy/Sites/spirit-media-portal/src/pages/developers.astro", void 0);

const $$file = "/home/deploy/Sites/spirit-media-portal/src/pages/developers.astro";
const $$url = "/developers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Developers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
