const BACKEND = process.env.BACKEND_URL;

export async function POST(request, { params }) {
  const token = request.headers.get("authorization") || "";
  const res = await fetch(`${BACKEND}/users/favorites/${params.slug}`, {
    method: "POST",
    headers: { Authorization: token },
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}

export async function DELETE(request, { params }) {
  const token = request.headers.get("authorization") || "";
  const res = await fetch(`${BACKEND}/users/favorites/${params.slug}`, {
    method: "DELETE",
    headers: { Authorization: token },
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}
