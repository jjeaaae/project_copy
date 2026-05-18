import { recipes } from "@/data";

export async function POST(req) {

  const body = await req.json();

  const { moods, cravings } = body;

  let filtered = recipes;

  // mood filter
  if (moods.length > 0) {

    filtered = filtered.filter(recipe =>

      recipe.moods?.some(m =>
        moods.includes(m)
      )
    );
  }

  // craving filter
  if (cravings.length > 0) {

    filtered = filtered.filter(recipe =>

      recipe.cravings?.some(c =>
        cravings.includes(c)
      )
    );
  }

  return Response.json(filtered);
}