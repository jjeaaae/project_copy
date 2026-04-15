import { getFavoriteRecipes } from "../../data.js";
import "../../legacy/css/favorite.css";

export default function FavoritesPage() {
  const favorites = getFavoriteRecipes();

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
          <div className="recipe-grid">
            {favorites.map((recipe) => (
              <article key={recipe.id} className="panel recipe-card">
                <img className="card-image" src={recipe.image} alt={recipe.alt} />
                <div className="card-body">
                  <p className="card-tag">{recipe.tag}</p>
                  <h3>{recipe.title}</h3>
                  <p className="card-meta">{recipe.meta}</p>
                  <a className="card-button" href={`/detail?id=${recipe.id}`}>Жор үзэх</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}