import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";
export const GET: APIRoute = async ({ locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);
	try {
		const resp = await fetch(`${apiUrl}/api/prospect/stats`, {
			headers: { Authorization: `Bearer ${secret}` },
			// @ts-expect-error
			signal: AbortSignal.timeout(10_000),
		});
		const data = await resp.json();
		return new Response(JSON.stringify(data), {
			status: resp.status,
			headers: { "Content-Type": "application/json" },
		});
	} catch (e: any) {
		return new Response(
			JSON.stringify({ error: e.message || "Tools API unreachable" }),
			{ status: 502, headers: { "Content-Type": "application/json" } },
		);
	}
};
