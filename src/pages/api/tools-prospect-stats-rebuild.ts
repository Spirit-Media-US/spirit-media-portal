import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";

export const POST: APIRoute = async ({ locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);

	if (!secret) {
		return new Response(
			JSON.stringify({ error: "TOOLS_API_SECRET not configured" }),
			{ status: 500, headers: { "Content-Type": "application/json" } },
		);
	}

	try {
		const resp = await fetch(`${apiUrl}/api/prospect/stats/rebuild-portal`, {
			method: "POST",
			headers: { Authorization: `Bearer ${secret}` },
			// @ts-expect-error AbortSignal.timeout is available at runtime
			signal: AbortSignal.timeout(10_000),
		});
		const text = await resp.text();
		return new Response(text, {
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
