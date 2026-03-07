import { d as createAstro, e as createComponent } from '../chunks/astro/server_CE8Lg1Vy.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://spirit-media-portal.netlify.app");
const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  const cookies = Astro2.cookies;
  cookies.delete("portal_auth", { path: "/" });
  return Astro2.redirect("/login");
}, "/home/deploy/Sites/spirit-media-portal/src/pages/logout.astro", void 0);

const $$file = "/home/deploy/Sites/spirit-media-portal/src/pages/logout.astro";
const $$url = "/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Logout,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
