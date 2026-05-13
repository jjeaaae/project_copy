"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../legacy/css/detail.css";

export default function DetailPage() {
  const params = useSearchParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = params.get("id");
    if (!id) { setError("Жорын ID олдсонгүй"); setLoading(false); return; }

    fetch(`/api/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setError(data.message);
        else setRecipe(data);
      })
      .catch(() => setError("Өгөгдөл татахад алдаа гарлаа"))
      .finally(() => setLoading(false));
  }, [params]);

  if (loading) return <p style={{ padding: 40 }}>Уншиж байна...</p>;
  if (error)   return <p style={{ padding: 40 }}>{error}</p>;

  return (
    <main className="main-content">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Жорын танилцуулга</p>
          <h2>{recipe.title}</h2>
          <p className="section-intro">{recipe.description}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container detail-layout">
          <article className="panel summary-panel">
            <img className="panel-image" src={recipe.image} alt={recipe.alt} />
            <h3>Жорын товч мэдээлэл</h3>
            <p><strong>Хугацаа:</strong> {recipe.cookTime}</p>
            <p><strong>Порц:</strong> {recipe.servings}</p>
            <p><strong>Төвөгшил:</strong> {recipe.difficulty}/10</p>
            <p><strong>Хоолны гарал үүсэл:</strong> {recipe.cuisine}</p>
            <p><strong>Калори:</strong> {recipe.calories}</p>
            <a className="card-button" href="/search">Буцах</a>
          </article>

          <div className="info-grid">
            <article className="panel">
              <h3>Орц</h3>
              <ul>
                {recipe.ingredients.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>

            <article className="panel">
              <h3>Тэжээлийн мэдээлэл</h3>
              <p>Калори: {recipe.nutrition.calories}</p>
              <p>Уураг: {recipe.nutrition.protein}</p>
              <p>Нүүрс ус: {recipe.nutrition.carbs}</p>
              <p>Өөх тос: {recipe.nutrition.fat}</p>
              <p>Тохирох төрөл: {recipe.nutrition.type}</p>
            </article>
          </div>

          <div className="info-grid">
            <article className="panel">
              <h3>Хэв маягт тохирох байдал</h3>
              <ul>
                {recipe.lifestyle.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>

            <article className="panel">
              <h3>Насны ангилал</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
                {recipe.ageGroup.map((item) => (
                  <span key={item} style={{ padding: "8px 14px", borderRadius: 999, background: "#efe5d7", color: "#5a3e2b", fontWeight: 700, fontSize: "0.9rem" }}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <article className="panel">
            <h3>Хийх алхам</h3>
            <ol>
              {recipe.steps.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </article>
        </div>
      </section>
    </main>
  );
}
