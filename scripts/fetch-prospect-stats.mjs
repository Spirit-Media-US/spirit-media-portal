#!/usr/bin/env node
// Runs during `npm run build`. Fetches the latest prospect stats from the local
// Tools API on Bethel and bakes them into src/data/prospect-stats.json so the
// portal page can render the data statically — no runtime API call.
//
// If the fetch fails, the existing JSON file is left alone so the build never
// blocks on a transient Tools API problem. A warning is logged instead.

import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, "../src/data/prospect-stats.json");

const TOOLS_API_URL = process.env.TOOLS_API_URL || "http://localhost:4327";
const TOOLS_API_SECRET = process.env.TOOLS_API_SECRET || "";

async function fetchStats() {
	const url = `${TOOLS_API_URL}/api/prospect/stats`;
	const resp = await fetch(url, {
		headers: { Authorization: `Bearer ${TOOLS_API_SECRET}` },
		signal: AbortSignal.timeout(15_000),
	});
	if (!resp.ok) throw new Error(`Tools API ${resp.status}`);
	return await resp.json();
}

function writeFallback(reason) {
	if (existsSync(OUTPUT)) {
		console.warn(`[prebuild] Stats fetch failed (${reason}) — keeping existing JSON.`);
		return;
	}
	const empty = {
		builtAt: new Date().toISOString(),
		stale: true,
		error: reason,
		summary: { total: 0, opened: 0, clicked: 0, replied: 0, openRate: "—", clickRate: "—" },
		prospects: [],
	};
	writeFileSync(OUTPUT, JSON.stringify(empty, null, 2));
	console.warn(`[prebuild] Stats fetch failed (${reason}) — wrote empty fallback so build can proceed.`);
}

(async () => {
	try {
		const data = await fetchStats();
		const baked = {
			builtAt: new Date().toISOString(),
			stale: false,
			...data,
		};
		writeFileSync(OUTPUT, JSON.stringify(baked, null, 2));
		console.log(
			`[prebuild] Baked prospect stats: ${baked.summary?.total ?? 0} prospects, ${baked.summary?.opened ?? 0} opened.`,
		);
	} catch (err) {
		writeFallback(err.message || String(err));
	}
})();
