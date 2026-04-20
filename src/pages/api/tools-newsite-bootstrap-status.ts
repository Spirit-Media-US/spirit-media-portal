import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";
export const GET: APIRoute = async ({ url, locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);
	const jobId = url.searchParams.get("job_id");
	if (!jobId)
		return new Response(JSON.stringify({ error: "job_id required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	try {
		const resp = await fetch(
			`${apiUrl}/api/newsite/bootstrap/status/${jobId}`,
			{
				headers: { Authorization: `Bearer ${secret}` },
			},
		);
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
