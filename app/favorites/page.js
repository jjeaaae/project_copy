import "../../legacy/css/favorite.css"

export default function FavoritesPage() {
    return (
        <>
            <div id="site-header-mount"></div>

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
                        <div className="recipe-grid" id="recipe-grid"></div>
                    </div>
                </section>
            </main>
        </>
    );
}