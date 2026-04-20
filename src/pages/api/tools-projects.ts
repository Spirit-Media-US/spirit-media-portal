import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";
export const GET: APIRoute = async ({ locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);
	try {
		const resp = await fetch(`${apiUrl}/api/projects`, {
			headers: { Authorization: `Bearer ${secret}` },
		});
		const data = await resp.json();
		return new Response(JSON.stringify(data), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (e: any) {
		return new Response(JSON.stringify([]), {
			headers: { "Content-Type": "application/json" },
		});
	}
};

export const PATCH: APIRoute = async ({ request, locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);
	const body = await request.json();
	const { project_id, ...fields } = body;
	try {
		const resp = await fetch(`${apiUrl}/api/projects/${project_id}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${secret}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(fields),
		});
		const data = await resp.json();
		return new Response(JSON.stringify(data), {
			status: resp.status,
			headers: { "Content-Type": "application/json" },
		});
	} catch (e: any) {
		return new Response(JSON.stringify({ error: e.message }), {
			status: 502,
			headers: { "Content-Type": "application/json" },
		});
	}
};
