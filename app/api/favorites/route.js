// Replaced by /api/users/favorites — favorites are now per-user
export async function GET() {
  return Response.json({ message: "Use /api/users/favorites instead" }, { status: 410 });
}
