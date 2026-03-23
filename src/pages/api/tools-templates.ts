import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const apiUrl = import.meta.env.TOOLS_API_URL;
  const secret = import.meta.env.TOOLS_API_SECRET;

  try {
    const resp = await fetch(`${apiUrl}/api/templates`, {
      headers: { Authorization: `Bearer ${secret}` },
    });
    const data = await resp.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Could not reach Tools API' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
