import "../../legacy/css/personalized.css"

export default function PersonalizedPage() {
    return (
        <>
            <div id="site-header-mount"></div>

            <main className="main-content">
                <section className="hero">
                    <div className="container hero-layout">
                        <div>
                            <p className="eyebrow">Хувийн тохиргоотой хайлт</p>
                            <h2>Танд тохирсон хооллолтын мэдээлэл</h2>
                            <p className="section-intro">Энэ хуудас нь хэрэглэгчийн нас, зорилго, харшил, дуртай амт, идэвх хөдөлгөөний хэв маягийг авч дараа нь хувь хүнд таарсан жорын шүүлт үүсгэх бүтэцтэй.</p>
                        </div>
                        <a className="back-link" href="/search">Ердийн хайлт руу буцах</a>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container page-grid">
                        <form className="profile-form">
                            <div className="form-section">
                                <h3>Үндсэн мэдээлэл</h3>
                                <div className="field-grid">
                                    <label>
                                        <span>Нас</span>
                                        <input type="number" placeholder="Жишээ: 21"/>
                                    </label>
                                    <label>
                                        <span>Хүйс</span>
                                        <select id="profile-gender"></select>
                                    </label>
                                    <label>
                                        <span>Өндөр (см)</span>
                                        <input type="number" placeholder="170"/>
                                    </label>
                                    <label>
                                        <span>Жин (кг)</span>
                                        <input type="number" placeholder="65"/>
                                    </label>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Хооллолтын зорилго</h3>
                                <div className="choice-grid" id="profile-goals"></div>
                            </div>

                            <div className="form-section">
                                <h3>Эрүүл мэнд ба хязгаарлалт</h3>
                                <div className="field-grid">
                                    <label>
                                        <span>Харшилтай орц</span>
                                        <input type="text" placeholder="Самар, өндөг, сүү"/>
                                    </label>
                                    <label>
                                        <span>Идэхгүй орц</span>
                                        <input type="text" placeholder="Сонгино, мөөг"/>
                                    </label>
                                    <label>
                                        <span>Илчлэгийн зорилт</span>
                                        <input type="number" placeholder="Өдөрт 1800"/>
                                    </label>
                                    <label>
                                        <span>Хоолны дэглэм</span>
                                        <select id="profile-diet"></select>
                                    </label>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Амьдралын хэв маяг</h3>
                                <div className="field-grid">
                                    <label>
                                        <span>Идэвх хөдөлгөөний түвшин</span>
                                        <select id="profile-activity"></select>
                                    </label>
                                    <label>
                                        <span>Өдөрт хэдэн удаа хооллох</span>
                                        <select id="profile-meals"></select>
                                    </label>
                                    <label>
                                        <span>Дуртай улсын хоол</span>
                                        <select id="profile-cuisine"></select>
                                    </label>
                                    <label>
                                        <span>Хоол хийхэд зарцуулах дээд хугацаа</span>
                                        <input type="number" placeholder="45 минут"/>
                                    </label>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Нэмэлт тэмдэглэл</h3>
                                <label>
                                    <span>Танд чухал бусад мэдээлэл</span>
                                    <textarea placeholder="Жишээ нь: өглөөний хоол хурдан байх, амтлагч бага хэрэглэх, хүүхдэд тохиромжтой гэх мэт"></textarea>
                                </label>
                            </div>

                            <div className="action-row">
                                <button type="button" className="secondary-button">Цэвэрлэх</button>
                                <button type="submit" className="primary-button">Хувийн шүүлт үүсгэх</button>
                            </div>
                        </form>

                        <aside className="summary-panel">
                            <div className="summary-card">
                                <p className="summary-label">Энэ хуудас юу хийх вэ?</p>
                                <h3>Танд зориулсан шүүлт үүсгэнэ</h3>
                                <ul className="summary-list" id="profile-summary-list"></ul>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </>
    );
}