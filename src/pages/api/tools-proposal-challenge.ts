import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";

// GET: fetch latest challenge screenshot
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
			`${apiUrl}/api/proposal/challenge/screenshot/${jobId}`,
			{
				headers: {
					Authorization: `Bearer ${secret}`,
					"Content-Type": "application/json",
				},
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

// POST: send click coordinates, get updated screenshot
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
			`${apiUrl}/api/proposal/challenge/click/${jobId}`,
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${secret}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ x: body.x, y: body.y }),
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
