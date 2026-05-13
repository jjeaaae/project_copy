"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { favoritesApi } from "../lib/api";
import "../../legacy/css/favorite.css";

export default function FavoritesPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) { router.replace("/login"); return; }

    favoritesApi.getAll()
      .then(setFavorites)
      .catch(() => setError("Өгөгдөл татахад алдаа гарлаа"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="main-content">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Хадгалсан цуглуулга</p>
          <h2>Хадгалсан жорууд</h2>
          <p className="section-intro">Хэрэглэгчийн хадгалсан жоруудыг энэ хэсэгт харуулна.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          {loading && <p>Уншиж байна...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && favorites.length === 0 && (
            <p>Хадгалсан жор байхгүй байна.</p>
          )}
          <div className="recipe-grid">
            {favorites.map((recipe) => (
              <article key={recipe._id} className="panel recipe-card">
                <img className="card-image" src={recipe.image} alt={recipe.alt} />
                <div className="card-body">
                  <p className="card-tag">{recipe.tag}</p>
                  <h3>{recipe.title}</h3>
                  <p className="card-meta">{recipe.meta}</p>
                  <a className="card-button" href={`/detail?id=${recipe.slug}`}>Жор үзэх</a>
                  <button
                    className="secondary-button"
                    style={{ marginTop: 8, width: "100%", cursor: "pointer" }}
                    onClick={async () => {
                      await favoritesApi.remove(recipe.slug);
                      setFavorites((prev) => prev.filter((r) => r._id !== recipe._id));
                    }}
                  >
                    Хасах
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
