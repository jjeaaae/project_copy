"use client";

import { useState, useMemo } from "react";
import { searchRecipes } from "../../data.js";
import CUISINES from "../../cuisines.json";
import AGE_GROUPS from "../../ageGroups.json";
import "../../legacy/css/search.css";

const QUICK_CHIPS = ["Тахиа", "Улаан лооль", "Сармис", "Паста", "Бяслаг"];

export default function SearchPage() {
    const [nameQuery, setNameQuery] = useState("");
    const [included, setIncluded] = useState([]);
    const [excluded, setExcluded] = useState([]);
    const [includeInput, setIncludeInput] = useState("");
    const [excludeInput, setExcludeInput] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [ageGroup, setAgeGroup] = useState("");
    const [maxTime, setMaxTime] = useState(90);
    const [maxCalories, setMaxCalories] = useState("");
    function addIncluded(val) {
        const v = val.trim();
        if (v && !included.includes(v)) setIncluded([...included, v]);
        setIncludeInput("");
    }

    function addExcluded(val) {
        const v = val.trim();
        if (v && !excluded.includes(v)) setExcluded([...excluded, v]);
        setExcludeInput("");
    }

    function removeIncluded(val) {
        setIncluded(included.filter((i) => i !== val));
    }

    function removeExcluded(val) {
        setExcluded(excluded.filter((i) => i !== val));
    }

    const results = useMemo(() => {
        let found = searchRecipes(nameQuery);

        included.forEach((ing) => {
            found = found.filter((r) =>
                r.ingredients.some((i) => i.toLowerCase().includes(ing.toLowerCase()))
            );
        });

        excluded.forEach((ing) => {
            found = found.filter((r) =>
                !r.ingredients.some((i) => i.toLowerCase().includes(ing.toLowerCase()))
            );
        });

        if (difficulty !== "") {
            found = found.filter((r) => r.difficulty === Number(difficulty));
        }

        if (cuisine) {
            found = found.filter((r) => r.cuisine === cuisine);
        }

        if (ageGroup) {
            found = found.filter((r) => r.ageGroup.includes(ageGroup));
        }

        found = found.filter((r) => {
            const mins = parseInt(r.cookTime);
            return isNaN(mins) || mins <= maxTime;
        });

        if (maxCalories) {
            found = found.filter((r) => {
                const cal = parseInt(r.calories);
                return isNaN(cal) || cal <= parseInt(maxCalories);
            });
        }

        return found;
    }, [nameQuery, included, excluded, difficulty, cuisine, ageGroup, maxTime, maxCalories]);

    function handleReset() {
        setNameQuery("");
        setIncluded([]);
        setExcluded([]);
        setIncludeInput("");
        setExcludeInput("");
        setDifficulty("");
        setCuisine("");
        setAgeGroup("");
        setMaxTime(90);
        setMaxCalories("");
    }

    return (
        <main className="main-content">
            <section className="hero">
                <div className="container hero-top">
                    <div className="hero-copy">
                        <p className="eyebrow">Тохирох жор хайх</p>
                        <h2>Жор хайх</h2>
                        <p className="section-intro">
                            Хөргөгчиндөө байгаа орцоо оруулж, шүүлтээр илчлэг, төвөгшил,
                            улсын төрөл зэргээр эмхтэй хайж өнөөдрийн жороо сонгоорой.
                        </p>
                        {included.length > 0 && (
                            <div className="hero-notes">
                                {included.map((ing) => (
                                    <span key={ing}>{ing}</span>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="hero-actions">
                        <a className="hero-link-button" href="/personalized">
                            Зөвхөн таньд зориулсан орц
                        </a>
                        <div className="hero-mini-card">
                            <strong>Хайлтын зөвлөгөө</strong>
                            <p>Орц нэмж эсвэл жорын нэрээр хайж болно</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <section className="search-builder panel">
                        <div className="builder-group">
                            <h3>Жорын нэрээр хайх</h3>
                            <div className="token-row">
                                <input
                                    className="token-input"
                                    type="text"
                                    placeholder="Жорын нэр бичнэ үү..."
                                    value={nameQuery}
                                    onChange={(e) => setNameQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                                />
                            </div>
                        </div>

                        <div className="builder-group builder-divider">
                            <h3>Байгаа орц</h3>
                            <div className="token-row">
                                {included.map((ing) => (
                                    <span key={ing} className="token">
                                        {ing}{" "}
                                        <button
                                            onClick={() => removeIncluded(ing)}
                                            style={{ marginLeft: 6, background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                                <input
                                    className="token-input"
                                    type="text"
                                    placeholder="Орцоо бичээд Enter дарна уу"
                                    value={includeInput}
                                    onChange={(e) => setIncludeInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") addIncluded(includeInput);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="builder-group builder-divider">
                            <h3>Оруулахгүй орц</h3>
                            <div className="token-row">
                                {excluded.map((ing) => (
                                    <span key={ing} className="token token-danger">
                                        {ing}{" "}
                                        <button
                                            onClick={() => removeExcluded(ing)}
                                            style={{ marginLeft: 6, background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                                <input
                                    className="token-input"
                                    type="text"
                                    placeholder="Харшилтай эсвэл дургүй орцоо бичнэ үү"
                                    value={excludeInput}
                                    onChange={(e) => setExcludeInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") addExcluded(excludeInput);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="quick-row">
                            <div className="quick-add">
                                <span className="quick-label">Түргэн нэмэх:</span>
                                {QUICK_CHIPS.map((chip) => (
                                    <button
                                        key={chip}
                                        type="button"
                                        className="quick-chip"
                                        onClick={() => addIncluded(chip)}
                                    >
                                        {chip}
                                    </button>
                                ))}
                            </div>
                            <button type="button" className="search-button" onClick={handleReset}>
                                Цэвэрлэх
                            </button>
                        </div>
                    </section>

                    <div className="search-layout">
                        <aside className="filters-panel panel" aria-label="Шүүлтүүд">
                            <section className="filter-section">
                                <h3>Төвөгшил</h3>
                                <input
                                    type="number"
                                    className="field-control"
                                    placeholder="1-10"
                                    min="1"
                                    max="10"
                                    value={difficulty}
                                    onChange={(e) => setDifficulty(e.target.value)}
                                />
                            </section>

                            <section className="filter-section">
                                <h3>Хоолны улсын төрөл</h3>
                                <select
                                    className="field-control"
                                    value={cuisine}
                                    onChange={(e) => setCuisine(e.target.value)}
                                >
                                    <option value="">Бүгд</option>
                                    {CUISINES.map((c) => (
                                        <option key={c.id} value={c.label}>
                                            {c.label}
                                        </option>
                                    ))}
                                </select>
                            </section>

                            <section className="filter-section">
                                <h3>Насны ангилал</h3>
                                <select
                                    className="field-control"
                                    value={ageGroup}
                                    onChange={(e) => setAgeGroup(e.target.value)}
                                >
                                    <option value="">Бүгд</option>
                                    {AGE_GROUPS.map((a) => (
                                        <option key={a.id} value={a.label}>
                                            {a.label}
                                        </option>
                                    ))}
                                </select>
                            </section>

                            <section className="filter-section">
                                <h3>Хамгийн их хугацаа</h3>
                                <input
                                    type="range"
                                    min="10"
                                    max="90"
                                    value={maxTime}
                                    onChange={(e) => setMaxTime(Number(e.target.value))}
                                    className="range-control"
                                />
                                <div className="range-meta">
                                    <span>10 мин</span>
                                    <strong>{maxTime} мин</strong>
                                </div>
                            </section>

                            <section className="filter-section">
                                <h3>Илчлэгийн дээд хэмжээ</h3>
                                <input
                                    type="number"
                                    className="field-control"
                                    placeholder="Жишээ: 450"
                                    value={maxCalories}
                                    onChange={(e) => setMaxCalories(e.target.value)}
                                />
                            </section>

                            <button type="button" className="reset-button" onClick={handleReset}>
                                Шүүлт цэвэрлэх
                            </button>
                        </aside>

                        <section className="results-area" aria-label="Хайлтын үр дүн">
                            <div className="results-toolbar">
                                <div>
                                    <h3>
                                        {results.length === 0 ? "Үр дүн олдсонгүй" : `${results.length} жор олдлоо`}
                                    </h3>
                                    <p id="search-results-count">
                                        {nameQuery && `«${nameQuery}» · `}
                                        {included.length > 0 && `Орц: ${included.join(", ")} · `}
                                        {excluded.length > 0 && `Хасах: ${excluded.join(", ")}`}
                                    </p>
                                    {included.length > 0 && (
                                        <div className="result-summary">
                                            {included.map((ing) => (
                                                <span key={ing}>{ing}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="result-stack">
                                {(results ?? []).map((recipe) => (
                                    <article key={recipe.id} className="match-card">
                                        <img
                                            className="match-image"
                                            src={recipe.image}
                                            alt={recipe.alt}
                                        />
                                        <div className="match-content">
                                            <span className="match-type">{recipe.tag}</span>
                                            <h3>{recipe.title}</h3>
                                            <div className="match-meta">
                                                <span>⏱ {recipe.cookTime}</span>
                                                <span>🍽 {recipe.servings} порц</span>
                                                <span>📊 {recipe.difficulty}/10</span>
                                                <span>🌍 {recipe.cuisine}</span>
                                            </div>
                                            <p>{recipe.description}</p>
                                            <div className="match-tags" style={{ marginTop: 16 }}>
                                                {recipe.ingredients.map((ing) => (
                                                    <span
                                                        key={ing}
                                                        className={
                                                            included.some((i) =>
                                                                ing.toLowerCase().includes(i.toLowerCase())
                                                            )
                                                                ? "ok-tag"
                                                                : "soft-tag"
                                                        }
                                                    >
                                                        {ing}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="match-score good">
                                            <strong>{recipe.calories.replace(" ккал", "")}</strong>
                                            <span>ккал</span>
                                            <a
                                                href={`/detail?id=${recipe.id}`}
                                                className="search-button"
                                                style={{
                                                    marginTop: 8,
                                                    textAlign: "center",
                                                    textDecoration: "none",
                                                    padding: "10px 16px",
                                                    borderRadius: 14,
                                                }}
                                            >
                                                Жор үзэх
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}