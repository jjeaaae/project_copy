import "../../legacy/css/add.css";

export default function AddPage() {
  return (
    <>
      <div id="site-header-mount"></div>

      <main className="main-content">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Шинэ контент илгээх</p>
            <h2>Жор нэмэх</h2>
            <p className="section-intro">Энэ формд гарчиг, зураг, ангилал, орц, алхам, хугацаа, порц зэрэг шаардлагатай талбарууд орсон.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <form className="panel form-panel">
              <div className="panel-heading">
                <p className="card-tag">Жорын форм</p>
                <h3>Шинэ жор оруулах</h3>
              </div>
              <label htmlFor="recipe-name">Жорын нэр</label>
              <input id="recipe-name" type="text" placeholder="Жорын нэр" />

              <label htmlFor="category">Ангилал</label>
              <select id="category"></select>

              <label htmlFor="image-link">Зургийн холбоос</label>
              <input id="image-link" type="text" placeholder="Сонголттой" />

              <label htmlFor="cook-time">Хоол хийх хугацаа</label>
              <input id="cook-time" type="text" placeholder="35 минут" />

              <label htmlFor="servings">Порц</label>
              <input id="servings" type="text" placeholder="4" />

              <label htmlFor="ingredients">Орц</label>
              <textarea id="ingredients" placeholder="Орцоо энд бичнэ үү"></textarea>

              <label htmlFor="steps">Алхам</label>
              <textarea id="steps" placeholder="Хийх алхмаа энд бичнэ үү"></textarea>

              <button className="card-button" type="submit">Жор нийтлэх</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}