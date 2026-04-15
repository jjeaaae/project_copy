import "../../legacy/css/login.css";

export default function LoginPage() {
  return (
    <>
      <div id="site-header-mount"></div>

      <main className="main-content">
        <section className="auth-section">
          <div className="container auth-layout">
            <div className="auth-copy">
              <p className="eyebrow">Бүртгэл</p>
              <h2 id="auth-page-title"></h2>
              <p id="auth-page-copy"></p>
              <div className="info-card">
                <h3 id="auth-info-title"></h3>
                <ul id="auth-info-list"></ul>
              </div>
            </div>

            <form className="auth-form">
              <h3 id="auth-form-title"></h3>

              <label>
                <span>И-мэйл</span>
                <input type="email" placeholder="name@example.com" />
              </label>

              <label>
                <span>Нууц үг</span>
                <input type="password" placeholder="Нууц үгээ оруулна уу" />
              </label>

              <div className="row">
                <label className="check-row">
                  <input type="checkbox" />
                  <span>Намайг сана</span>
                </label>
                <a className="text-link" href="#">Нууц үг мартсан?</a>
              </div>

              <button type="submit" className="primary-button" id="auth-submit-button"></button>

              <div className="signup-cta">
                <p className="switch-text" id="auth-switch-text"></p>
                <a className="secondary-button" id="auth-switch-link" href="/signup"></a>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}