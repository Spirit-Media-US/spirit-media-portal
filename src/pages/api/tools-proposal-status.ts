import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, url }) => {
  const apiUrl = import.meta.env.TOOLS_API_URL;
  const secret = import.meta.env.TOOLS_API_SECRET;
  const jobId  = url.searchParams.get('job_id');
  if (!jobId) return new Response(JSON.stringify({ error: 'job_id required' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  try {
    const resp = await fetch(`${apiUrl}/api/proposal/status/${jobId}`, {
      headers: { Authorization: `Bearer ${secret}` },
    });
    const data = await resp.json();
    return new Response(JSON.stringify(data), { status: resp.status, headers: { 'Content-Type': 'application/json' } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 502, headers: { 'Content-Type': 'application/json' } });
  }
};
