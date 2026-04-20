import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";
export const GET: APIRoute = async ({ locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);

	try {
		const resp = await fetch(`${apiUrl}/api/history`, {
			headers: { Authorization: `Bearer ${secret}` },
		});
		const data = await resp.json();
		return new Response(JSON.stringify(data), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (e) {
		return new Response(JSON.stringify([]), {
			headers: { "Content-Type": "application/json" },
		});
	}
};
