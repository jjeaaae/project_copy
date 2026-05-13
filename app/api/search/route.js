const BACKEND = process.env.BACKEND_URL;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.toString();
  const res = await fetch(`${BACKEND}/recipes${query ? `?${query}` : ""}`);
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
