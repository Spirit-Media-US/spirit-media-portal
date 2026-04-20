import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";
export const POST: APIRoute = async ({ request, locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);
	const body = await request.json();
	try {
		const resp = await fetch(`${apiUrl}/api/general-agent`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${secret}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
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

export const GET: APIRoute = async ({ url, locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);
	const jobId = url.searchParams.get("job_id");
	try {
		const resp = await fetch(`${apiUrl}/api/general-agent/status/${jobId}`, {
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
			{ status: 502, headers: { "Content-Type": "application/json" } },
		);
	}
};
