const BACKEND = process.env.BACKEND_URL;

export async function GET() {
  const res = await fetch(`${BACKEND}/recipes?isFavorite=true`);
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
