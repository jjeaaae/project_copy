"use client";

import { useEffect, useState } from "react";
import "../legacy/css/index.css";

const API_URL = "http://localhost:5001/api/recipes";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [selectedCravings, setSelectedCravings] = useState([]);
  const [w1, setW1] = useState("");
  const [w2, setW2] = useState("");
  const [w3, setW3] = useState("");
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Recipe data авахад алдаа гарлаа:", error);
      }
    }

    fetchRecipes();
  }, []);

  const moodsList = [
    "Ядарсан", "Гунигтай", "Тайван",
    "Сайхан", "Даарч байна", "Халууцаж байна",
    "Эрч хүчтэй", "Залхуу", "Сандарсан", 
  ];

  const cravingsList = [
    { name: "Чихэрлэг", icon: "🍰" },
    { name: "Халуун ногоотой", icon: "🔥" },
    { name: "Ногоотой", icon: "🥗" },
    { name: "Шөлтэй", icon: "🍜" },
    { name: "Шарсан", icon: "🍗" },
    { name: "Гадаад хоол", icon: "🥪" },
    { name: "Эрүүл", icon: "🥦" },
    { name: "Мах ихтэй", icon: "🥩" },
    { name: "Монгол хоол", icon: "🍲" },
    { name: "Өглөөний хоол", icon: "🍝" },
    { name: "Хурдан хийх хоол", icon: "💨" },
    { name: "Далайн хоол", icon: "🍲" },
    { name: "Түргэн хоол", icon: "🍔" },
    { name: "Бяслаг орсон", icon: "🧀" },
  ];

  const toggleMood = (mood) => {
    setSelectedMoods((prev) =>
      prev.includes(mood)
        ? prev.filter((item) => item !== mood)
        : [...prev, mood]
    );
  };

  const toggleCraving = (craving) => {
    setSelectedCravings((prev) =>
      prev.includes(craving)
        ? prev.filter((item) => item !== craving)
        : [...prev, craving]
    );
  };

  const textIncludes = (recipe, word) => {
    const allText = [
      recipe.title,
      recipe.description,
      recipe.meta,
      recipe.tag,
      recipe.cuisine,
      recipe.calories,
      recipe.cookTime,
      ...(recipe.ingredients || []),
      ...(recipe.lifestyle || []),
      ...(recipe.ageGroup || []),
      ...(recipe.moods  || []),
      ...(recipe.cravings || []),

    ]
      .join(" ")
      .toLowerCase();

    return allText.includes(word.toLowerCase());
  };

  const recommend = () => {
    const words = [w1, w2, w3]
      .map((w) => w.toLowerCase().trim())
      .filter((w) => w !== "");

    if (
      selectedMoods.length === 0 &&
      selectedCravings.length === 0 &&
      words.length === 0
    ) {
      setResults(recipes);
      setShowResult(true);
      return;
    }

    const filtered = recipes.filter((recipe) => {
      const moodMatch = selectedMoods.some((mood) =>
      recipe.moods?.includes(mood)
      );

      const cravingMatch = selectedCravings.some((craving) =>
        recipe.cravings?.includes(craving)
      );
      const wordMatch = words.some((word) =>
        textIncludes(recipe, word)
      );

      return moodMatch || cravingMatch || wordMatch;
    });

    setResults(filtered);
    setShowResult(true);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-label">ӨДРИЙН СОНГОЛТ</div>
        <h1>Өнөөдөр <em>юу идэх вэ?</em></h1>
        <p className="hero-sub">
          Таны хүсэл болон биеийн байдалд тохирсон жорыг олж өгнө.
        </p>
      </section>

      <main className="main">
        <div className="section-label">Алхам 1</div>
        <div className="step-card">
          <div className="step-num">01</div>
          <div className="step-title">Таны биеийн байдал</div>
          <div className="step-desc">Та яг одоо яаж байна вэ?</div>
          <div className="opt-badge">Заавал биш</div>

          <div className="pills">
            {moodsList.map((mood) => (
              <div
                key={mood}
                className={`pill ${selectedMoods.includes(mood) ? "sel" : ""}`}
                onClick={() => toggleMood(mood)}
              >
                {mood}
              </div>
            ))}
          </div>
        </div>

        <div className="section-label">Алхам 2</div>
        <div className="step-card">
          <div className="step-num">02</div>
          <div className="step-title">Юу идмээр байна?</div>
          <div className="step-desc">Хоолны төрлөө сонгоно уу</div>
          <div className="opt-badge">Заавал биш</div>

          <div className="craving-grid">
            {cravingsList.map((item) => (
              <div
                key={item.name}
                className={`craving-card ${selectedCravings.includes(item.name) ? "sel" : ""}`}
                onClick={() => toggleCraving(item.name)}
              >
                <div className="c-icon">{item.icon}</div>
                <div className="c-label">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-label">Алхам 3</div>
        <div className="step-card">
          <div className="step-num">03</div>
          <div className="step-title">Нэмэлт үгс</div>
          <div className="step-desc">Та хүсвэл түлхүүр үг оруулж болно</div>
          <div className="opt-badge">Заавал биш</div>

          <div className="word-row">
            <div className="word-box">
              <span className="w-num">Үг 1</span>
              <input
                placeholder="Жишээ: тахиа"
                value={w1}
                onChange={(e) => setW1(e.target.value)}
              />
            </div>

            <div className="word-box">
              <span className="w-num">Үг 2</span>
              <input
                placeholder="Жишээ: шөл"
                value={w2}
                onChange={(e) => setW2(e.target.value)}
              />
            </div>

            <div className="word-box">
              <span className="w-num">Үг 3</span>
              <input
                placeholder="Жишээ: эрүүл"
                value={w3}
                onChange={(e) => setW3(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="cta-area">
          <button className="cta-btn" onClick={recommend}>
            Жор санал болгох <span className="cta-arrow">→</span>
          </button>
        </div>

        {showResult && (
          <div className="result-section">
            <div className="result-label">Танд тохирох жорууд</div>

            {results.length === 0 ? (
              <p className="empty-text">
                Тохирох жор олдсонгүй. Өөр сонголт хийж үзнэ үү.
              </p>
            ) : (
              <div className="result-grid">
                {results.map((recipe) => (
                  <article key={recipe._id || recipe.slug} className="recipe-card">
                    <img
                      className="card-image"
                      src={recipe.image || "/pancake.png"}
                      alt={recipe.alt || recipe.title}
                    />

                    <div className="card-body">
                      <p className="card-tag">{recipe.tag}</p>
                      <h3>{recipe.title}</h3>
                      <p className="card-meta">{recipe.description}</p>

                      <div className="recipe-info">
  <span>{recipe.cookTime}</span>
  <span>•</span>
  <span>{recipe.calories}</span>
</div>

                      <a
                        className="card-button"
                        href={`/detail?id=${recipe.slug}`}
                      >
                        Жор үзэх
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}