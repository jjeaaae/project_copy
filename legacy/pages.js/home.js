// ================= HOME PAGE =================
// pages/home.js

import { recipes, moods, cravings } from "../data.js";

export function initHomePage() {
  const heroTitle = document.getElementById("index-hero-title");
  if (!heroTitle) return; // зөвхөн index дээр ажиллана

  // ===== ТЕКСТҮҮД =====
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
  document.getElementById("index-result-label").innerText =
    "Танд тохирох жорууд";

  // ===== PILLS БА CRAVINGS ҮҮСГЭХ =====
  createPills();
  createCravings();

  // ===== RECOMMEND ФУНКЦ WINDOW-Д ХОЛБОХ =====
  window.recommend = recommend;
}


// ===== Алхам 1 — Moods (Pills) =====
function createPills() {
  const container = document.getElementById("moods");
  if (!container) return;

  moods.forEach((m) => {
    const el = document.createElement("div");
    el.className = "pill";
    el.innerText = m;
    el.onclick = () => el.classList.toggle("sel");
    container.appendChild(el);
  });
}


// ===== Алхам 2 — Cravings (Grid) =====
function createCravings() {
  const container = document.getElementById("cravings");
  if (!container) return;

  cravings.forEach((c) => {
    const card = document.createElement("div");
    card.className = "craving-card";
    card.innerHTML = `
      <div class="c-icon">${c.icon}</div>
      <div class="c-label">${c.name}</div>
    `;
    card.onclick = () => card.classList.toggle("sel");
    container.appendChild(card);
  });
}


// ===== Сонгогдсон элементүүд авах =====
function getSelected(selector) {
  return [...document.querySelectorAll(selector)].map((el) => el.innerText);
}


// ===== Алхам 3 — Recommend (Шүүлт) =====
function recommend() {
  const selectedMoods    = getSelected("#moods .sel");
  const selectedCravings = getSelected("#cravings .c-label")
    .filter((_, i) =>
      document.querySelectorAll("#cravings .craving-card")[i]
        ?.classList.contains("sel")
    );

  const words = [
    document.getElementById("w1")?.value.toLowerCase() || "",
    document.getElementById("w2")?.value.toLowerCase() || "",
    document.getElementById("w3")?.value.toLowerCase() || "",
  ].filter((w) => w.trim() !== "");

  // Юу ч сонгоогүй бол бүгдийг харуулна
  if (
    selectedMoods.length === 0 &&
    selectedCravings.length === 0 &&
    words.length === 0
  ) {
    renderResults(recipes);
    return;
  }

  const results = recipes.filter((recipe) => {
    const moodMatch = selectedMoods.some((m) =>
      recipe.moods?.includes(m)
    );

    const cravingMatch = selectedCravings.some((c) =>
      recipe.cravings?.includes(c)
    );

    const wordMatch = words.some(
      (w) =>
        recipe.title?.toLowerCase().includes(w) ||
        recipe.description?.toLowerCase().includes(w) ||
        recipe.ingredients?.some((i) => i.toLowerCase().includes(w))
    );

    return moodMatch || cravingMatch || wordMatch;
  });

  renderResults(results);
}


// ===== Үр дүн харуулах =====
function renderResults(resultList) {
  const resultSection = document.getElementById("results");
  const grid          = document.getElementById("rgrid");
  if (!grid) return;

  resultSection.style.display = "block";

  if (resultList.length === 0) {
    grid.innerHTML = `<p>Тохирох жор олдсонгүй. Өөр сонголт хийж үзнэ үү.</p>`;
    return;
  }

  grid.innerHTML = resultList
    .map(
      (recipe) => `
    <article class="recipe-card">
      <img class="card-image" src="${recipe.image}" alt="${recipe.alt || recipe.title}" />
      <div class="card-body">
        <p class="card-tag">${recipe.tag || ""}</p>
        <h3>${recipe.title}</h3>
        <p class="card-meta">${recipe.description || ""}</p>
        <a class="card-button" href="detail.html?id=${recipe.id}">Жор үзэх</a>
      </div>
    </article>
  `
    )
    .join("");
}