// RecipeHub — Data handler

import { recipes, getRecipeById, getFavoriteRecipes } from "./data.js";


import { showFavorites } from "./pages/favorites.js";
import { showDetail } from "./pages/detail.js";
import { initHomePage } from "./pages/home.js";

document.addEventListener("DOMContentLoaded", () => {
  showFavorites();
  showDetail();
  initHomePage();
});

document.addEventListener("DOMContentLoaded", () => {
  showFavorites();
  showDetail();
  initHomePage(); // ШИНЭ
});


// ================= FAVORITES =================
function showFavorites() {
  const recipeGrid = document.getElementById("recipe-grid");
  if (!recipeGrid) return;

  const favoriteRecipes = getFavoriteRecipes();

  recipeGrid.innerHTML = favoriteRecipes
    .map(
      (recipe) => `
    <article class="panel recipe-card">
      <img class="card-image" src="${recipe.image}" alt="${recipe.alt}">
      <div class="card-body">
        <p class="card-tag">${recipe.tag}</p>
        <h3>${recipe.title}</h3>
        <p class="card-meta">${recipe.meta}</p>
        <a class="card-button" href="detail.html?id=${recipe.id}">Жор үзэх</a>
      </div>
    </article>
  `
    )
    .join("");
}


// ================= DETAIL =================
function showDetail() {
  const recipeTitle = document.getElementById("recipe-title");
  if (!recipeTitle) return;

  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  const recipe = getRecipeById(recipeId);

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

  document.getElementById("recipe-ingredients").innerHTML =
    recipe.ingredients.map((i) => `<li>${i}</li>`).join("");
}


// ================= HOME PAGE =================

// TEXT-үүд
function initHomePage() {
  const heroTitle = document.getElementById("index-hero-title");
  if (!heroTitle) return; // зөвхөн index дээр ажиллана

  document.getElementById("index-hero-label").innerText = "ӨДРИЙН СОНГОЛТ";
  document.getElementById("index-hero-title").innerHTML =
    'Өнөөдөр <em>юу идэх вэ?</em>';
  document.getElementById("index-hero-sub").innerText =
    "Таны хүсэл болон биеийн байдалд тохирсон жорыг олж өгнө.";

  document.getElementById("index-step-one-title").innerText =
    "Таны биеийн байдал";
  document.getElementById("index-step-one-desc").innerText =
    "Та яг одоо яаж байна вэ?";

  document.getElementById("index-step-two-title").innerText =
    "Юу идмээр байна?";
  document.getElementById("index-step-two-desc").innerText =
    "Хоолны төрлөө сонгоно уу";

  document.getElementById("index-step-three-title").innerText =
    "Нэмэлт үгс";
  document.getElementById("index-step-three-desc").innerText =
    "Та хүсвэл түлхүүр үг оруулж болно";

  document.getElementById("index-cta-text").innerText = "Жор санал болгох";

  createPills();
  createCravings();
}


// ===== Алхам 1 (Pills)
const moods = [
  "Ядарсан", "Гунигтай", "Тайван",
  "Сайхан", "Даарч байна", "Халууцаж байна", "Идэвхтэй", "Залхуу", "Сандарсан", "Эрч хүчтэй" 
];

function createPills() {
  const container = document.getElementById("moods");
  if (!container) return;

  moods.forEach(m => {
    const el = document.createElement("div");
    el.className = "pill";
    el.innerText = m;

    el.onclick = () => {
      el.classList.toggle("sel");
    };

    container.appendChild(el);
  });
}


// ===== Алхам 2 (Cravings)
const cravings = [
  { name: "Чихэрлэг", icon: "🍰" },
  { name: "Халуун", icon: "🔥" },
  { name: "Ногоотой", icon: "🥗" },
  { name: "Шөлтэй", icon: "🍜" },
  { name: "Шарсан", icon: "🍗" },
  { name: "Хөнгөн", icon: "🥪" },
  { name: "Эрүүл", icon: ""},
  { name: "Ногоо ихтэй", icon: ""},
  { name: "Мах ихтэй", icon: ""},
  { name: "Монгол хоол", icon: ""},
];

function createCravings() {
  const container = document.getElementById("cravings");
  if (!container) return;

  cravings.forEach(c => {
    const card = document.createElement("div");
    card.className = "craving-card";

    card.innerHTML = `
      <div class="c-icon">${c.icon}</div>
      <div class="c-label">${c.name}</div>
    `;

    card.onclick = () => {
      card.classList.toggle("sel");
    };

    container.appendChild(card);
  });
}


// ===== SELECT
function getSelected(selector) {
  return [...document.querySelectorAll(selector)]
    .map(el => el.innerText);
}


// ===== RECOMMEND BUTTON
window.recommend = function () {
  const moods = getSelected("#moods .sel");
  const cravings = getSelected("#cravings .sel");

  console.log(moods, cravings);

  alert("Сонгосон:\n" + moods.join(", ") + "\n" + cravings.join(", "));
};


// export
export { showFavorites, showDetail };
