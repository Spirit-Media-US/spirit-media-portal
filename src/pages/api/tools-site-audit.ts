import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	const apiUrl = import.meta.env.TOOLS_API_URL;
	const secret = import.meta.env.TOOLS_API_SECRET;
	const body = await request.json();
	try {
		const resp = await fetch(`${apiUrl}/api/site-audit`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${secret}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
			// @ts-expect-error
			signal: AbortSignal.timeout(15_000),
		});
		const data = await resp.json();
		return new Response(JSON.stringify(data), {
			status: resp.status,
			headers: { "Content-Type": "application/json" },
		});
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : "Tools API unreachable";
		return new Response(JSON.stringify({ error: msg }), {
			status: 502,
			headers: { "Content-Type": "application/json" },
		});
	}
};

export const GET: APIRoute = async ({ url }) => {
	const apiUrl = import.meta.env.TOOLS_API_URL;
	const secret = import.meta.env.TOOLS_API_SECRET;
	const jobId = url.searchParams.get("job_id");
	try {
		const resp = await fetch(`${apiUrl}/api/site-audit/status/${jobId}`, {
			headers: { Authorization: `Bearer ${secret}` },
		});
		const data = await resp.json();
		return new Response(JSON.stringify(data), {
			status: resp.status,
			headers: { "Content-Type": "application/json" },
		});
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : "Tools API unreachable";
		return new Response(JSON.stringify({ error: msg }), {
			status: 502,
			headers: { "Content-Type": "application/json" },
		});
	}
};
