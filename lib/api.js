// lib/api.js
const BASE = "http://localhost:5001/api";

// Бүх жор авах
export async function getRecipes(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE}/recipes${query ? "?" + query : ""}`);
  return res.json();
}

// Нэг жор авах (slug-аар)
export async function getRecipe(slug) {
  const res = await fetch(`${BASE}/recipes/${slug}`);
  return res.json();
}

// Нэвтрэх
export async function login(email, password) {
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json(); // { token, user }
}

// Бүртгүүлэх
export async function register(data) {
  const res = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Жор нэмэх (token шаардлагатай)
export async function createRecipe(data) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}