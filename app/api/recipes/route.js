import { recipes } from "@../../../data";

export async function GET() {
  return Response.json(recipes);
}