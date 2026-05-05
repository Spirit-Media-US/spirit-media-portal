import type { APIRoute } from "astro";

import { getToolsApi } from "../../lib/runtime-env";

// Binary proxy for cover render outputs (preview PNG, KDP PDF).
// Browser hits /api/tools-cover-file?slug=<slug>&file=<filename>
export const GET: APIRoute = async ({ url, locals }) => {
	const { apiUrl, secret } = getToolsApi(locals);

	const slug = url.searchParams.get("slug");
	const file = url.searchParams.get("file");

	if (!slug || !file) {
		return new Response(
			JSON.stringify({ error: "slug and file query params are required" }),
			{ status: 400, headers: { "Content-Type": "application/json" } },
		);
	}
	if (!/^[a-z0-9][a-z0-9-]*$/.test(slug) || /[/\\]|\.\./.test(file)) {
		return new Response(JSON.stringify({ error: "invalid slug or file" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	try {
		const resp = await fetch(
			`${apiUrl}/api/cover/file/${encodeURIComponent(slug)}/${encodeURIComponent(file)}`,
			{
				method: "GET",
				headers: { Authorization: `Bearer ${secret}` },
				// @ts-expect-error
				signal: AbortSignal.timeout(60_000),
			},
		);

		if (!resp.ok) {
			const text = await resp.text();
			return new Response(text, {
				status: resp.status,
				headers: {
					"Content-Type":
						resp.headers.get("Content-Type") || "application/json",
				},
			});
		}

		// Stream binary through with the upstream content type
		const blob = await resp.arrayBuffer();
		return new Response(blob, {
			status: 200,
			headers: {
				"Content-Type":
					resp.headers.get("Content-Type") || "application/octet-stream",
				"Content-Length": String(blob.byteLength),
				"Content-Disposition": `inline; filename="${file}"`,
				"Cache-Control": "private, max-age=60",
			},
		});
	} catch (e: any) {
		return new Response(
			JSON.stringify({ error: e.message || "Tools API unreachable" }),
			{ status: 502, headers: { "Content-Type": "application/json" } },
		);
	}
};
