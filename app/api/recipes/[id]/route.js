import { getRecipeById } from "@../../../data";

export async function GET(request, { params }) {
  const recipe = getRecipeById(params.id);

  if (!recipe) {
    return Response.json(
      { message: "Recipe not found" },
      { status: 404 }
    );
  }

  return Response.json(recipe);
}