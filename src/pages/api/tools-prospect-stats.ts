import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const apiUrl = import.meta.env.TOOLS_API_URL;
	const secret = import.meta.env.TOOLS_API_SECRET;
	try {
		const resp = await fetch(`${apiUrl}/api/prospect/stats`, {
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
