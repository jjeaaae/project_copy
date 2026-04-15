import "../../legacy/css/detail.css"

export default function DetailPage() {
    return (
        <>
            <div id="site-header-mount"></div>

            <main className="main-content">
                <section className="hero">
                    <div className="container">
                        <p className="eyebrow">Жорын танилцуулга</p>
                        <h2 id="recipe-title">Жорын нэр</h2>
                        <p className="section-intro" id="recipe-meta">Жорын тайлбар</p>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container detail-layout">
                        <article className="panel summary-panel">
                            <img className="panel-image" id="recipe-image" src="" alt="Жорын зураг"/>
                                <h3>Жорын товч мэдээлэл</h3>
                                <p><strong>Хугацаа:</strong> <span id="recipe-time"></span></p>
                                <p><strong>Порц:</strong> <span id="recipe-servings"></span></p>
                                <p><strong>Төвөгшил:</strong> <span id="recipe-difficulty"></span></p>
                                <p><strong>Калори:</strong> <span id="recipe-calories"></span></p>
                                <a className="card-button" href="/favorites">Буцах</a>
                        </article>

                        <div className="info-grid">
                            <article className="panel">
                                <h3>Орц</h3>
                                <ul id="recipe-ingredients"></ul>
                            </article>

                            <article className="panel">
                                <h3>Тэжээлийн мэдээлэл</h3>
                                <p>Калори: <span id="nutrition-calories"></span></p>
                                <p>Уураг: <span id="nutrition-protein"></span></p>
                                <p>Нүүрс ус: <span id="nutrition-carbs"></span></p>
                                <p>Өөх тос: <span id="nutrition-fat"></span></p>
                                <p>Тохирох төрөл: <span id="nutrition-type"></span></p>
                            </article>
                        </div>

                        <div className="info-grid">
                            <article className="panel">
                                <h3>Хэв маягт тохирох байдал</h3>
                                <ul id="recipe-lifestyle"></ul>
                            </article>

                            <article className="panel">
                                <h3>Насны ангилал</h3>
                                <ul id="recipe-age-group"></ul>
                            </article>
                        </div>

                        <article className="panel">
                            <h3>Хийх алхам</h3>
                            <ol id="recipe-steps"></ol>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
}