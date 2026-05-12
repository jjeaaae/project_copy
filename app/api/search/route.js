import { searchRecipes } from "@../../../data";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q") || "";

  const result = searchRecipes(query);

  return Response.json(result);
}