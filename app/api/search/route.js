export const dynamic = "force-dynamic";

const BACKEND = process.env.BACKEND_URL;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.toString();
  const res = await fetch(`${BACKEND}/recipes${query ? `?${query}` : ""}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
