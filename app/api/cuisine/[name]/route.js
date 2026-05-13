const BACKEND = process.env.BACKEND_URL;

export async function GET(request, { params }) {
  const res = await fetch(`${BACKEND}/recipes?cuisine=${encodeURIComponent(params.name)}`);
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
