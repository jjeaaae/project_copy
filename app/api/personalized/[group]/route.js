import { recipes } from "@../../../../data";

export async function GET(request, { params }) {
  const result = recipes.filter((recipe) =>
    recipe.ageGroup?.includes(params.group)
  );

  return Response.json(result);
}