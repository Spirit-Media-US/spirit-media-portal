import { e as createComponent, j as renderHead, r as renderTemplate } from '../chunks/astro/server_CE8Lg1Vy.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                     */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-sgpqyurt> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login | Spirit Media Portal</title><link rel="stylesheet" href="https://spiritmediapublishing.com/spirit-media-tokens.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-sgpqyurt> <div class="login-bg" data-astro-cid-sgpqyurt> <div class="login-card" data-astro-cid-sgpqyurt> <div class="login-logo" data-astro-cid-sgpqyurt> <span class="logo-spirit" data-astro-cid-sgpqyurt>Spirit</span><span class="logo-media" data-astro-cid-sgpqyurt>Media</span> <div class="logo-sub" data-astro-cid-sgpqyurt>PORTAL</div> </div> <form method="POST" action="/api/auth" data-astro-cid-sgpqyurt> <label for="pin" data-astro-cid-sgpqyurt>Enter PIN</label> <input id="pin" name="pin" type="password" inputmode="numeric" maxlength="6" placeholder="••••••" autocomplete="off" autofocus data-astro-cid-sgpqyurt> <button type="submit" data-astro-cid-sgpqyurt>Enter Portal</button> </form> <p class="login-footer" data-astro-cid-sgpqyurt>Spirit Media Confidential</p> </div> </div> </body></html>`;
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
