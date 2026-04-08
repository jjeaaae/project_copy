const DATA_URL = "../data.json";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();

    showFavorites(data.recipes);
    showDetail(data.recipes);
  } catch (error) {
    console.error("Алдаа:", error);
  }
});

function showFavorites(recipes) {
  const recipeGrid = document.getElementById("recipe-grid");
  if (!recipeGrid) return;

  const favoriteRecipes = recipes.filter(recipe => recipe.isFavorite);

  recipeGrid.innerHTML = favoriteRecipes.map(recipe => `
    <article class="panel recipe-card">
      <img class="card-image" src="${recipe.image}" alt="${recipe.alt}">
      <div class="card-body">
        <p class="card-tag">${recipe.tag}</p>
        <h3>${recipe.title}</h3>
        <p class="card-meta">${recipe.meta}</p>
        <a class="card-button" href="detail.html?id=${recipe.id}">Жор үзэх</a>
      </div>
    </article>
  `).join("");
}

function showDetail(recipes) {
  const recipeTitle = document.getElementById("recipe-title");
  if (!recipeTitle) return;

  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  const recipe = recipes.find(item => item.id === recipeId);

  if (!recipe) {
    recipeTitle.textContent = "Жор олдсонгүй";
    return;
  }

  document.getElementById("recipe-title").textContent = recipe.title;
  document.getElementById("recipe-meta").textContent = recipe.description;
  document.getElementById("recipe-image").src = recipe.image;
  document.getElementById("recipe-image").alt = recipe.alt;
  document.getElementById("recipe-time").textContent = recipe.cookTime;
  document.getElementById("recipe-servings").textContent = recipe.servings;
  document.getElementById("recipe-difficulty").textContent = recipe.difficulty;
  document.getElementById("recipe-calories").textContent = recipe.calories;

  document.getElementById("nutrition-calories").textContent = recipe.nutrition.calories;
  document.getElementById("nutrition-protein").textContent = recipe.nutrition.protein;
  document.getElementById("nutrition-carbs").textContent = recipe.nutrition.carbs;
  document.getElementById("nutrition-fat").textContent = recipe.nutrition.fat;
  document.getElementById("nutrition-type").textContent = recipe.nutrition.type;

  document.getElementById("recipe-ingredients").innerHTML =
    recipe.ingredients.map(item => `<li>${item}</li>`).join("");

  document.getElementById("recipe-lifestyle").innerHTML =
    recipe.lifestyle.map(item => `<li>${item}</li>`).join("");

  document.getElementById("recipe-age-group").innerHTML =
    recipe.ageGroup.map(item => `<li>${item}</li>`).join("");

  document.getElementById("recipe-steps").innerHTML =
    recipe.steps.map(item => `<li>${item}</li>`).join("");
}