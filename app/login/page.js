"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "../lib/api";
import "../../legacy/css/login.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await authApi.login({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="main-content">
      <section className="auth-section">
        <div className="container auth-layout">
          <div className="auth-copy">
            <p className="eyebrow">Бүртгэл</p>
            <h2>Тавтай морил</h2>
            <p>RecipeHub-д нэвтэрч жорын ертөнцөд ороорой.</p>
            <div className="info-card">
              <h3>Нэвтэрсний давуу тал</h3>
              <ul>
                <li>Жор хадгалах</li>
                <li>Үнэлгээ, сэтгэгдэл үлдээх</li>
                <li>Subscription-ийн давуу эрх</li>
              </ul>
            </div>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <h3>Нэвтрэх</h3>

            {error && (
              <p style={{ color: "red", marginBottom: 12, fontSize: "0.9rem" }}>{error}</p>
            )}

            <label>
              <span>И-мэйл</span>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              <span>Нууц үг</span>
              <input
                type="password"
                placeholder="Нууц үгээ оруулна уу"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="primary-button" disabled={loading}>
              {loading ? "Нэвтэрч байна..." : "Нэвтрэх"}
            </button>

            <div className="signup-cta">
              <p className="switch-text">Бүртгэл байхгүй юу?</p>
              <a className="secondary-button" href="/signup">Бүртгүүлэх</a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
