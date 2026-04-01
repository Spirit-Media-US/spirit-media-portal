import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	const apiUrl = import.meta.env.TOOLS_API_URL;
	const secret = import.meta.env.TOOLS_API_SECRET;

	const body = await request.json();

	try {
		const resp = await fetch(`${apiUrl}/api/newsite/prelaunch`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${secret}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
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
