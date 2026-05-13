import { recipes } from "@../../../data";

export async function POST(request) {
  const body = await request.json();

  const newRecipe = {
    id: Date.now().toString(),
    ...body,
  };

  recipes.push(newRecipe);

  return Response.json({
    message: "Recipe added successfully",
    recipe: newRecipe,
  });
}