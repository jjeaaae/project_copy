export const dynamic = "force-dynamic";

const BACKEND = process.env.BACKEND_URL;

export async function GET(request) {
  const token = request.headers.get("authorization") || "";
  const res = await fetch(`${BACKEND}/auth/me`, {
    headers: { Authorization: token },
    cache: "no-store",
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
