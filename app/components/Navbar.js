"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/search", label: "Хайх" },
  { href: "/favorites", label: "Хадгалсан" },
  { href: "/pricing", label: "Subscription" },
  { href: "/add", label: "Жор нэмэх" },
  { href: "/admin", label: "Админ" },
  { href: "/login", label: "Нэвтрэх" },
];

const activePageMap = {
  "/personalized": "/search",
};

export default function Navbar() {
  const pathname = usePathname();
  const activePage = activePageMap[pathname] || pathname;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-link" href="/" aria-label="RecipeHub нүүр хуудас">
          <span className="eyebrow">Жорын апп</span>
          <span className="logo">RecipeHub</span>
        </Link>
        <nav className="site-nav" aria-label="Үндсэн цэс">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={activePage === href ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}