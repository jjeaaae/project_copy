import "../legacy/css/index.css"

export default function homePage() {
    return (
        <>
            <div id="site-header-mount"></div>

            <section className="hero">
                <div className="hero-label" id="index-hero-label"></div>
                <h1 id="index-hero-title"></h1>
                <p className="hero-sub" id="index-hero-sub"></p>
            </section>

            <main className="main">

                <div className="section-label">Алхам 1</div>
                <div className="step-card">
                    <div className="step-num">01</div>
                    <div className="step-title" id="index-step-one-title"></div>
                    <div className="step-desc" id="index-step-one-desc"></div>
                    <div className="opt-badge">Заавал биш</div>
                    <div className="pills" id="moods"></div>
                </div>

                <div className="section-label">Алхам 2</div>
                <div className="step-card">
                    <div className="step-num">02</div>
                    <div className="step-title" id="index-step-two-title"></div>
                    <div className="step-desc" id="index-step-two-desc"></div>
                    <div className="opt-badge">Заавал биш</div>
                    <div className="craving-grid" id="cravings"></div>
                </div>

                <div className="section-label">Алхам 3</div>
                <div className="step-card">
                    <div className="step-num">03</div>
                    <div className="step-title" id="index-step-three-title"></div>
                    <div className="step-desc" id="index-step-three-desc"></div>
                    <div className="opt-badge">Заавал биш</div>
                    <div className="word-row">
                        <div className="word-box"><span className="w-num">Үг 1</span><input id="w1" placeholder="Жишээ: залхуу…" /></div>
                        <div className="word-box"><span className="w-num">Үг 2</span><input id="w2" placeholder="Жишээ: хүйтэн…" /></div>
                        <div className="word-box"><span className="w-num">Үг 3</span><input id="w3" placeholder="Жишээ: гэртээ…" /></div>
                    </div>
                </div>

                <div className="cta-area">
                    <button className="cta-btn">
                        <span id="index-cta-text"></span> <span className="cta-arrow">→</span>
                    </button>
                    <span className="cta-hint" id="index-cta-hint"></span>
                </div>

                <div className="result-section" id="results" style={{ display: "none" }}>
                    <div className="result-label" id="index-result-label"></div>
                    <div className="result-grid" id="rgrid"></div>
                </div>

            </main>
        </>
    );
}