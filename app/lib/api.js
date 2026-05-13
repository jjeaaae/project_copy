async function apiFetch(path, options = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const res = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Алдаа гарлаа");
  return data;
}

export const authApi = {
  register: (body) => apiFetch("/api/auth/register", { method: "POST", body: JSON.stringify(body) }),
  login: (body) => apiFetch("/api/auth/login", { method: "POST", body: JSON.stringify(body) }),
  me: () => apiFetch("/api/auth/me"),
};

export const favoritesApi = {
  getAll: () => apiFetch("/api/users/favorites"),
  add: (slug) => apiFetch(`/api/users/favorites/${slug}`, { method: "POST" }),
  remove: (slug) => apiFetch(`/api/users/favorites/${slug}`, { method: "DELETE" }),
};

export const recipesApi = {
  getAll: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return apiFetch(`/api/recipes${qs ? `?${qs}` : ""}`);
  },
  getById: (id) => apiFetch(`/api/recipes/${id}`),
  search: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return apiFetch(`/api/search${qs ? `?${qs}` : ""}`);
  },
  getFavorites: () => apiFetch("/api/favorites"),
  getByCuisine: (name) => apiFetch(`/api/cuisine/${encodeURIComponent(name)}`),
  getByAgeGroup: (group) => apiFetch(`/api/personalized/${encodeURIComponent(group)}`),
  add: (body) => apiFetch("/api/add", { method: "POST", body: JSON.stringify(body) }),
};
