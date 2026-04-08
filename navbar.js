const navItems = [
  { href: "search.html", label: "Хайх" },
  { href: "detail.html", label: "Жорын дэлгэрэнгүй" },
  { href: "favorites.html", label: "Хадгалсан" },
  { href: "pricing.html", label: "Subscription" },
  { href: "add.html", label: "Жор нэмэх" },
  { href: "admin.html", label: "Админ" },
  { href: "login.html", label: "Нэвтрэх"}
];

const activePageMap = {
  "personalized.html": "search.html",
};

function renderNavbar() {
  const mount = document.getElementById("site-header-mount");

  if (!mount) {
    return;
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const activePage = activePageMap[currentPage] || currentPage;

  const links = navItems
    .map(({ href, label }) => {
      const activeClass = href === activePage ? "active" : "";
      return `<a class="${activeClass}" href="${href}">${label}</a>`;
    })
    .join("");

  mount.innerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand-link" href="index.html" aria-label="RecipeHub нүүр хуудас">
          <span class="eyebrow">Жорын апп</span>
          <span class="logo">RecipeHub</span>
        </a>
        <nav class="site-nav" aria-label="Үндсэн цэс">
          ${links}
        </nav>
      </div>
    </header>
  `;
}

document.addEventListener("DOMContentLoaded", renderNavbar);
