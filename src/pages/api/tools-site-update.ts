import type { APIRoute } from "astro";

// GET /api/tools-site-update?sites=1  → list available sites
// POST /api/tools-site-update         → start update job

export const GET: APIRoute = async ({ url }) => {
	const apiUrl = import.meta.env.TOOLS_API_URL;
	const secret = import.meta.env.TOOLS_API_SECRET;

	try {
		const resp = await fetch(`${apiUrl}/api/site-update/sites`, {
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

export const POST: APIRoute = async ({ request }) => {
	const apiUrl = import.meta.env.TOOLS_API_URL;
	const secret = import.meta.env.TOOLS_API_SECRET;

	const body = await request.json();

	try {
		const resp = await fetch(`${apiUrl}/api/site-update/start`, {
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
			{
				status: 502,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
};
