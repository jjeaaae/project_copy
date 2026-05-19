"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
   { href: "/", label: "Нүүр хуудас" },
  { href: "/search", label: "Хайх" },
  { href: "/favorites", label: "Хадгалсан" },
  { href: "/pricing", label: "Subscription" },
  { href: "/add", label: "Жор нэмэх" },
 
];

const activePageMap = {
  "/personalized": "/search",
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const activePage = activePageMap[pathname] || pathname;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, [pathname]);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-link" href="/" aria-label="RecipeHub нүүр хуудас">
          <span className="eyebrow">Жорын апп</span>
          <span className="logo">RecipeHub v0.1</span>
        </Link>
        <nav className="site-nav" aria-label="Үндсэн цэс">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className={activePage === href ? "active" : ""}>
              {label}
            </Link>
          ))}

          {user?.role === "admin" && (
            <Link href="/admin" className={activePage === "/admin" ? "active" : ""}>
              Админ
            </Link>
          )}

          {user ? (
            <>
              <span style={{ fontWeight: 600, padding: "0 8px" }}>
                {user.firstName}
              </span>
              <button
                onClick={handleLogout}
                style={{ background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}
              >
                Гарах
              </button>
            </>
          ) : (
            <Link href="/login" className={activePage === "/login" ? "active" : ""}>
              Нэвтрэх
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
