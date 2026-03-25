import { defineMiddleware } from "astro:middleware";

const portalRoutes = [
	"/dashboard",
	"/connecting",
	"/playbook",
	"/developers",
	"/task-log",
	"/templates",
];
const clientRoutes = ["/clients"];
const publicRoutes = ["/login", "/client-login", "/site-update"];

export const onRequest = defineMiddleware((context, next) => {
	const { pathname } = context.url;

	if (
		pathname.startsWith("/api") ||
		publicRoutes.some((r) => pathname.startsWith(r))
	) {
		return next();
	}

	if (portalRoutes.some((r) => pathname.startsWith(r))) {
		const auth = context.cookies.get("portal_auth");
		if (!auth || auth.value !== "pin_030126") return context.redirect("/login");
	}

	if (clientRoutes.some((r) => pathname.startsWith(r))) {
		const auth = context.cookies.get("client_auth");
		if (!auth || auth.value !== "pin_060622") {
			const next = encodeURIComponent(
				context.url.pathname + context.url.search,
			);
			return context.redirect(`/client-login?next=${next}`);
		}
	}

	return next();
});
