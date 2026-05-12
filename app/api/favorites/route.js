import { getFavoriteRecipes } from "@../../../data";

export async function GET() {
  return Response.json(getFavoriteRecipes());
}