import "../../legacy/css/pricing.css"

export default function PricingPage() {
    return (
        <>
            <div id="site-header-mount"></div>

            <main className="main-content">
                <section className="hero">
                    <div className="container hero-layout">
                        <div>
                            <p className="eyebrow">Эрхийн багцууд</p>
                            <h2>Хэрэглэгчийн багц ба тусгай эрх</h2>
                            <p className="section-intro">Энгийн хэрэглэгч үндсэн функцуудыг ашиглана. Захиалгатай хэрэглэгч нэмэлт хэрэгслүүд нээнэ. Харин Creator болон Specialist эрх нь илүү үнэ цэнтэй контент үүсгэх тусгай түвшин байна.</p>
                        </div>
                        <div className="hero-note">
                            <p className="note-label">Санал болгож буй бүтэц</p>
                            <strong id="pricing-hero-note-title"></strong>
                            <span id="pricing-hero-note-copy"></span>
                        </div>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container pricing-grid" id="pricing-grid"></div>
                </section>

                <section className="page-section">
                    <div className="container">
                        <div className="section-head">
                            <p className="eyebrow">Тусгай түвшин</p>
                            <h3>Subscriber дээр нэмэгдэх эрхүүд</h3>
                            <p>Эдгээр нь энгийн захиалгатай эрхээс цааш контентын чанар, мэргэжлийн үнэ цэнийг нэмэх зориулалттай.</p>
                        </div>

                        <div className="role-grid" id="pricing-role-grid"></div>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container">
                        <div className="compare-box">
                            <div className="compare-head">
                                <h3>Эрхийн харьцуулалт</h3>
                                <p>Ямар түвшинд ямар боломж нээгдэхийг товч харуулсан хүснэгт.</p>
                            </div>

                            <div className="compare-table" id="pricing-compare-table"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}