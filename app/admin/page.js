import "../../legacy/css/admin.css"

export default function AdminPage() {
    return (
        <>
            <div id="site-header-mount"></div>

            <main className="main-content">
                <section className="hero">
                    <div className="container hero-layout">
                        <div>
                            <p className="eyebrow">Төслийн удирдлага</p>
                            <h2>Админ хяналтын самбар</h2>
                            <p className="section-intro">Жорын хяналт, хэрэглэгчийн эрх, захиалгын төлөв болон системийн ерөнхий үзүүлэлтийг нэг дороос харах загвар.</p>
                        </div>

                        <div className="hero-note">
                            <p className="note-label">Өнөөдрийн товч мэдээлэл</p>
                            <strong id="admin-hero-note-title"></strong>
                            <span id="admin-hero-note-copy"></span>
                        </div>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container admin-layout">
                        <div className="admin-main">
                            <section className="stats-grid" aria-label="Ерөнхий үзүүлэлтүүд" id="admin-stats-grid"></section>

                            <section className="panel admin-panel">
                                <div className="section-head">
                                    <div>
                                        <p className="card-tag">Хяналт</p>
                                        <h3>Шалгах дараалал</h3>
                                    </div>
                                    <a className="secondary-button" href="/detail">Бүгдийг харах</a>
                                </div>

                                <div className="queue-list" id="admin-queue-list"></div>
                            </section>

                            <section className="panel admin-panel">
                                <div className="section-head">
                                    <div>
                                        <p className="card-tag">Хэрэглэгчийн эрх</p>
                                        <h3>Эрхийн хүсэлтүүд</h3>
                                    </div>
                                </div>

                                <div className="request-table" role="table" aria-label="Эрхийн хүсэлтүүд">
                                    <div className="table-row table-head" role="row">
                                        <span role="columnheader">Нэр</span>
                                        <span role="columnheader">Хүсэлт</span>
                                        <span role="columnheader">Төлөв</span>
                                    </div>
                                    <div id="admin-request-rows"></div>
                                </div>
                            </section>
                        </div>

                        <aside className="admin-side">
                            <div className="summary-card side-card">
                                <p className="note-label">Шуурхай үйлдэл</p>
                                <h3>Түргэн холбоос</h3>
                                <div className="action-stack">
                                    <a className="primary-button" href="/add">Шинэ жор шалгах</a>
                                    <a className="secondary-button" href="/pricing">Захиалгын төлөв харах</a>
                                    <a className="secondary-button" href="/favorites">Хадгалсан контент шалгах</a>
                                </div>
                            </div>

                            <div className="summary-card side-card">
                                <p className="note-label">Системийн төлөв</p>
                                <h3>Эрсдэлийн тойм</h3>
                                <ul className="summary-list" id="admin-system-notes"></ul>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </>
    );
}