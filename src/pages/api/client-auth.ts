import type { APIRoute } from "astro";

const CORRECT_PIN = "060622";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const data = await request.formData();
	const pin = data.get("pin");
	const next = (data.get("next") as string) || "/clients";

	if (pin === CORRECT_PIN) {
		cookies.set("client_auth", `pin_${CORRECT_PIN}`, {
			path: "/",
			httpOnly: true,
			secure: import.meta.env.PROD,
			sameSite: "lax",
			maxAge: 60 * 60 * 24 * 7,
		});
		return redirect(next);
	}

	const url = new URL(request.url);
	return redirect(`/client-login?error=1&next=${encodeURIComponent(next)}`);
};
