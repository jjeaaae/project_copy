"use client";
import { useState } from "react";
import "../legacy/css/index.css";

export default function HomePage() {
  // ===== DATA =====
  const moodsList = [
    "Ядарсан", "Гунигтай", "Тайван",
    "Сайхан", "Даарч байна", "Халууцаж байна",
    "Идэвхтэй", "Залхуу", "Сандарсан", "Эрч хүчтэй"
  ];

  const cravingsList = [
    { name: "Чихэрлэг", icon: "🍰" },
    { name: "Халуун", icon: "🔥" },
    { name: "Ногоотой", icon: "🥗" },
    { name: "Шөлтэй", icon: "🍜" },
    { name: "Шарсан", icon: "🍗" },
    { name: "Хөнгөн", icon: "🥪" },
    { name: "Эрүүл", icon: "🥦" },
    { name: "Ногоо ихтэй", icon: "🥬" },
    { name: "Мах ихтэй", icon: "🥩" },
    { name: "Монгол хоол", icon: "🍲" },
  ];

  // ===== STATE =====
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [selectedCravings, setSelectedCravings] = useState([]);
  const [w1, setW1] = useState("");
  const [w2, setW2] = useState("");
  const [w3, setW3] = useState("");
  const [showResult, setShowResult] = useState(false);

  // ===== TOGGLE FUNCTIONS =====
  const toggleMood = (m) => {
    setSelectedMoods((prev) =>
      prev.includes(m)
        ? prev.filter((x) => x !== m)
        : [...prev, m]
    );
  };

  const toggleCraving = (c) => {
    setSelectedCravings((prev) =>
      prev.includes(c)
        ? prev.filter((x) => x !== c)
        : [...prev, c]
    );
  };

  // ===== RECOMMEND =====
  const recommend = () => {
    setShowResult(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-label">ӨДРИЙН СОНГОЛТ</div>
        <h1>
          Өнөөдөр <em>юу идэх вэ?</em>
        </h1>
        <p className="hero-sub">
          Таны хүсэл болон биеийн байдалд тохирсон жорыг олж өгнө.
        </p>
      </section>

      <main className="main">

        {/* STEP 1 */}
        <div className="section-label">Алхам 1</div>
        <div className="step-card">
          <div className="step-num">01</div>
          <div className="step-title">Таны биеийн байдал</div>
          <div className="step-desc">Та яг одоо яаж байна вэ?</div>

          <div className="pills">
            {moodsList.map((m, i) => (
              <div
                key={i}
                className={`pill ${selectedMoods.includes(m) ? "sel" : ""}`}
                onClick={() => toggleMood(m)}
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* STEP 2 */}
        <div className="section-label">Алхам 2</div>
        <div className="step-card">
          <div className="step-num">02</div>
          <div className="step-title">Юу идмээр байна?</div>
          <div className="step-desc">Хоолны төрлөө сонгоно уу</div>

          <div className="craving-grid">
            {cravingsList.map((c, i) => (
              <div
                key={i}
                className={`craving-card ${selectedCravings.includes(c.name) ? "sel" : ""}`}
                onClick={() => toggleCraving(c.name)}
              >
                <div className="c-icon">{c.icon}</div>
                <div className="c-label">{c.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* STEP 3 */}
        <div className="section-label">Алхам 3</div>
        <div className="step-card">
          <div className="step-num">03</div>
          <div className="step-title">Нэмэлт үгс</div>
          <div className="step-desc">Та хүсвэл түлхүүр үг оруулж болно</div>

          <div className="word-row">
            <div className="word-box">
              <span>Үг 1</span>
              <input value={w1} onChange={(e) => setW1(e.target.value)} />
            </div>

            <div className="word-box">
              <span>Үг 2</span>
              <input value={w2} onChange={(e) => setW2(e.target.value)} />
            </div>

            <div className="word-box">
              <span>Үг 3</span>
              <input value={w3} onChange={(e) => setW3(e.target.value)} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-area">
          <button className="cta-btn" onClick={recommend}>
            Жор санал болгох →
          </button>
        </div>

        {/* RESULT */}
        {showResult && (
          <div className="result-section">
            <div className="result-label">Таны сонголт</div>

            <div className="result-grid">
              <div className="result-card">
                <h3>Сонгосон Mood</h3>
                <p>{selectedMoods.join(", ")}</p>
              </div>

              <div className="result-card">
                <h3>Сонгосон Хоол</h3>
                <p>{selectedCravings.join(", ")}</p>
              </div>

              <div className="result-card">
                <h3>Үгс</h3>
                <p>{w1}, {w2}, {w3}</p>
              </div>
            </div>
          </div>
        )}

      </main>
    </>
  );
}
