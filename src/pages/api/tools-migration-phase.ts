import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";
export const GET: APIRoute = async ({ url, locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);
	const projectId = url.searchParams.get("project_id");

	if (!projectId) {
		return new Response(JSON.stringify({ error: "project_id is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	try {
		const resp = await fetch(`${apiUrl}/api/migration/phase/${projectId}`, {
			headers: { Authorization: `Bearer ${secret}` },
		});
		const data = await resp.json();
		return new Response(JSON.stringify(data), {
			status: resp.status,
			headers: { "Content-Type": "application/json" },
		});
	} catch (e: any) {
		return new Response(
			JSON.stringify({ error: e.message || "Tools API unreachable" }),
			{
				status: 502,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
};
