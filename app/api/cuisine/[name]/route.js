import { recipes } from "@../../../../data";

export async function GET(request, { params }) {
  const filtered = recipes.filter(
    (recipe) => recipe.cuisine === params.name
  );

  return Response.json(filtered);
}