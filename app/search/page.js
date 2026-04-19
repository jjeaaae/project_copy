import "../../legacy/css/search.css"

export default function SearchPage() {
    return (
        <>
            <div id="site-header-mount"></div>

            <main className="main-content">
                <section className="hero">
                    <div className="container hero-top">
                        <div className="hero-copy">
                            <p className="eyebrow">Тохирох жор хайх</p>
                            <h2>Жор хайх</h2>
                            <p className="section-intro">Хөргөгчиндөө байгаа орцоо оруулж, шүүлтээр илчлэг, төвөгшил, улсын төрөл зэргээр эмхтэй хайх боломжтой бүтэц.</p>
                            <div className="hero-notes" id="search-hero-notes"></div>
                        </div>
                        <div className="hero-actions">
                            <a className="hero-link-button" href="/personalized">Зөвхөн таньд зориулсан орц</a>
                            <div className="hero-mini-card">
                                <strong id="search-mini-title"></strong>
                                <p id="search-mini-copy"></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container">
                        <section className="search-builder panel">
                            <div className="builder-group">
                                <h3>Байгаа орц</h3>
                                <div className="token-row" id="available-ingredients"></div>
                            </div>

                            <div className="builder-group builder-divider">
                                <h3>Оруулахгүй орц</h3>
                                <div className="token-row" id="excluded-ingredients"></div>
                            </div>

                            <div className="quick-row">
                                <div className="quick-add">
                                    <span className="quick-label">Түргэн нэмэх:</span>
                                    <span id="quick-add-chips"></span>
                                </div>
                                <button type="button" className="search-button">Жор хайх</button>
                            </div>
                        </section>

                        <div className="search-layout">
                            <aside className="filters-panel panel" aria-label="Шүүлтүүд">
                                <section className="filter-section">
                                    <h3>Ангилал</h3>
                                    <div className="filter-list" id="search-categories"></div>
                                </section>

                                <section className="filter-section">
                                    <h3>Төвөгшил</h3>
                                    <div id="search-difficulty"></div>
                                </section>

                                <section className="filter-section">
                                    <h3>Хамгийн их хугацаа</h3>
                                    <input id="search-time-range" type="range" min="10" max="90" defaultValue="60" className="range-control"/>
                                        <div className="range-meta">
                                            <span>10 мин</span>
                                            <strong id="search-time-value">60 мин</strong>
                                        </div>
                                </section>

                                <section className="filter-section">
                                    <h3>Илчлэгийн дээд хэмжээ</h3>
                                    <input type="number" className="field-control" placeholder="Жишээ: 450"/>
                                </section>

                                <section className="filter-section">
                                    <h3>Хоолны улсын төрөл</h3>
                                    <select className="field-control" id="search-cuisine"></select>
                                </section>

                                <section className="filter-section">
                                    <h3>Хооллолтын төрөл</h3>
                                    <div id="search-dietary"></div>
                                </section>

                                <button type="button" className="reset-button">Шүүлт цэвэрлэх</button>
                            </aside>

                            <section className="results-area" aria-label="Хайлтын үр дүн">
                                <div className="results-toolbar">
                                    <div>
                                        <h3 id="search-results-title"></h3>
                                        <p id="search-results-count"></p>
                                        <div className="result-summary" id="search-results-summary"></div>
                                    </div>
                                    <label className="sort-box">
                                        <span>Эрэмбэлэх:</span>
                                        <select id="search-sort"></select>
                                    </label>
                                </div>

                                <div className="result-stack" id="search-results"></div>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}