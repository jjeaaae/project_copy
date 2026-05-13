import { recipes } from "../data/data.js";

export function getRecipeById(id) {
  return recipes.find(r => r.id == id);
}

export function getFavoriteRecipes() {
  return recipes.filter(r => r.favorite);
}