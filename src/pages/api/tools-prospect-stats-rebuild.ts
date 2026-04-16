import type { APIRoute } from "astro";

// Hardcoded public URL — same value lives in wrangler.toml [vars].
// Hardcoding here avoids the build-time env-var plumbing that has repeatedly
// broken the prospect-stats page. Only the secret needs to be an env var.
const TOOLS_API_URL = "https://tools-api.spiritmediapublishing.com";

export const POST: APIRoute = async ({ locals }) => {
	// Read the secret at runtime from the Cloudflare env binding. Falls back
	// to import.meta.env for local dev.
	const runtime = (locals as any)?.runtime?.env ?? {};
	const secret = runtime.TOOLS_API_SECRET || import.meta.env.TOOLS_API_SECRET;

	if (!secret) {
		return new Response(
			JSON.stringify({ error: "TOOLS_API_SECRET not configured" }),
			{ status: 500, headers: { "Content-Type": "application/json" } },
		);
	}

	try {
		const resp = await fetch(
			`${TOOLS_API_URL}/api/prospect/stats/rebuild-portal`,
			{
				method: "POST",
				headers: { Authorization: `Bearer ${secret}` },
				// @ts-expect-error AbortSignal.timeout is available at runtime
				signal: AbortSignal.timeout(10_000),
			},
		);
		const text = await resp.text();
		return new Response(text, {
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
