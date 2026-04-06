import type { APIRoute } from "astro";

const apiUrl = () => import.meta.env.TOOLS_API_URL;
const secret = () => import.meta.env.TOOLS_API_SECRET;
const headers = () => ({
	Authorization: `Bearer ${secret()}`,
	"Content-Type": "application/json",
});

// GET: fetch latest challenge screenshot
export const GET: APIRoute = async ({ url }) => {
	const jobId = url.searchParams.get("job_id");
	if (!jobId)
		return new Response(JSON.stringify({ error: "job_id required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	try {
		const resp = await fetch(
			`${apiUrl()}/api/proposal/challenge/screenshot/${jobId}`,
			{ headers: headers() },
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
export const POST: APIRoute = async ({ request }) => {
	const body = await request.json();
	const jobId = body.job_id;
	if (!jobId)
		return new Response(JSON.stringify({ error: "job_id required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	try {
		const resp = await fetch(
			`${apiUrl()}/api/proposal/challenge/click/${jobId}`,
			{
				method: "POST",
				headers: headers(),
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
