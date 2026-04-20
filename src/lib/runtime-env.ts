import type { APIContext } from "astro";

export function getToolsApi(locals: APIContext["locals"]): {
	apiUrl: string;
	secret: string;
} {
	const runtimeEnv = (locals as { runtime?: { env?: Record<string, string> } })
		?.runtime?.env;
	return {
		apiUrl: runtimeEnv?.TOOLS_API_URL ?? import.meta.env.TOOLS_API_URL,
		secret: runtimeEnv?.TOOLS_API_SECRET ?? import.meta.env.TOOLS_API_SECRET,
	};
}
