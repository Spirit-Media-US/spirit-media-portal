import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";
export const POST: APIRoute = async ({ request, locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);
	const body = await request.json();
	const jobId = body.job_id;
	if (!jobId)
		return new Response(JSON.stringify({ error: "job_id required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	try {
		const resp = await fetch(
			`${apiUrl}/api/proposal/challenge/dismiss/${jobId}`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${secret}`,
					"Content-Type": "application/json",
				},
				body: "{}",
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
