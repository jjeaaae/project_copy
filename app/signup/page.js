"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "../lib/api";
import "../../legacy/css/signup.css";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Нууц үг таарахгүй байна");
      return;
    }

    setLoading(true);
    try {
      const data = await authApi.register({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });
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
            <h2>Нэгдээрэй</h2>
            <p>RecipeHub-д бүртгүүлж хоолны жорын ертөнцийг нээ.</p>
            <div className="info-card">
              <h3>Бүртгүүлснээр</h3>
              <ul>
                <li>Жор хадгалах боломжтой</li>
                <li>Үнэлгээ, сэтгэгдэл үлдээх</li>
                <li>Subscription авч жор нэмэх</li>
              </ul>
            </div>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <h3>Бүртгүүлэх</h3>

            {error && (
              <p style={{ color: "red", marginBottom: 12, fontSize: "0.9rem" }}>{error}</p>
            )}

            <label>
              <span>Нэр</span>
              <input
                type="text"
                name="firstName"
                placeholder="Нэрээ оруулна уу"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Овог</span>
              <input
                type="text"
                name="lastName"
                placeholder="Овгоо оруулна уу"
                value={form.lastName}
                onChange={handleChange}
              />
            </label>

            <label>
              <span>И-мэйл</span>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Нууц үг</span>
              <input
                type="password"
                name="password"
                placeholder="Нууц үгээ оруулна уу"
                value={form.password}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Нууц үг давтах</span>
              <input
                type="password"
                name="confirm"
                placeholder="Нууц үгээ дахин оруулна уу"
                value={form.confirm}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="primary-button" disabled={loading}>
              {loading ? "Бүртгэж байна..." : "Бүртгүүлэх"}
            </button>

            <div className="signup-cta">
              <p className="switch-text">Бүртгэлтэй юу?</p>
              <a className="secondary-button" href="/login">Нэвтрэх</a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
