// ----- DATA -----
  export const recipes = [
  {
    id: "creamy-pasta",
    title: "Цөцгийтэй паста",
    alt: "Цөцгийтэй паста",
    tag: "Хадгалсан",
    meta: "Оройн хоолны дуртай сонголт",
    description: "Цөцгийтэй соус, мөөг, бяслагтай өтгөн амттай паста.",
    image: "/pancake.png",
    cookTime: "35 минут",
    servings: "4",
    difficulty: "Дунд",
    calories: "520 ккал",
    nutrition: {
      calories: "520 ккал",
      protein: "18г",
      carbs: "62г",
      fat: "24г",
      type: "Тэнцвэртэй оройн хоол",
    },
    ingredients: ["Паста", "Мөөг", "Цөцгий", "Бяслаг"],
    lifestyle: [
      "Түргэн оройн хоол төлөвлөхөд тохиромжтой",
      "Нэмэлт уургаар масс нэмэх зорилгод тааруулж болно",
      "Дунд зэрэг калоритой гэр бүлийн хоол",
    ],
    ageGroup: [
      "12-18: Тохиромжтой",
      "5-12: Амтлагчийг багасгаж болно",
      "1-5: Зөөлөн болгож бага порцоор өгөх",
    ],
    steps: [
      "Пастагаа чанана.",
      "Мөөгөө хуурна.",
      "Цөцгий, бяслагаа нэмнэ.",
      "Бүгдийг хольж сайтар болгоно.",
    ],
    isFavorite: true,
  },

  {
    id: "greek-salad",
    title: "Грек салат",
    alt: "Грек салат",
    tag: "Хадгалсан",
    meta: "Шинэхэн эрүүл сонголт",
    description: "Шинэхэн ногоо, фета бяслагтай хөнгөн салат.",
    image: "/pancake.png",
    cookTime: "15 минут",
    servings: "2",
    difficulty: "Хялбар",
    calories: "240 ккал",
    nutrition: {
      calories: "240 ккал",
      protein: "8г",
      carbs: "14г",
      fat: "16г",
      type: "Хөнгөн өдрийн хоол",
    },
    ingredients: ["Өргөст хэмх", "Улаан лооль", "Фета бяслаг", "Олив"],
    lifestyle: [
      "Эрүүл хооллолт баримталдаг хүмүүст тохиромжтой",
      "Илчлэг багатай хоол хайж байвал сайн сонголт",
      "Зун, хаврын улиралд шинэхэн байдлаар идэхэд тохиромжтой",
    ],
    ageGroup: [
      "12-18: Маш тохиромжтой",
      "5-12: Бяслагийн хэмжээг багасгаж болно",
      "1-5: Жижиглэж өгөх шаардлагатай",
    ],
    steps: [
      "Ногоонуудаа угааж жижиглэнэ.",
      "Фета бяслаг, оливаа нэмнэ.",
      "Оливын тос, давсаар амтална.",
      "Хүйтнээр нь шууд сервистэй болгоно.",
    ],
    isFavorite: true,
  },

  {
    id: "pancake",
    title: "Панкейк",
    alt: "Панкейк",
    tag: "Хадгалсан",
    meta: "Өглөөний хурдан сонголт",
    description: "Зөөлөн бүтэцтэй, өглөөний цайнд тохиромжтой амтлаг панкейк.",
    image: "/pancake.png",
    cookTime: "25 минут",
    servings: "4",
    difficulty: "Хялбар",
    calories: "380 ккал",
    nutrition: {
      calories: "380 ккал",
      protein: "10г",
      carbs: "48г",
      fat: "14г",
      type: "Өглөөний эрч хүчний хоол",
    },
    ingredients: ["Өндөг", "Сүү", "Гурил", "Цөцгийн тос"],
    lifestyle: [
      "Өглөө богино хугацаанд хоол хийхэд тохиромжтой",
      "Гэр бүлийн өглөөний цайд амархан бэлтгэнэ",
      "Жимс, сироптой хослуулж амт оруулж болно",
    ],
    ageGroup: [
      "12-18: Маш тохиромжтой",
      "5-12: Хүүхдэд дуртай амт",
      "1-5: Жижиг порцоор өгч болно",
    ],
    steps: [
      "Өндөг, сүүгээ холино.",
      "Гурил, тосоо нэмж зуурмаг бэлтгэнэ.",
      "Халсан хайруулын тавганд хоёр талаар нь шарна.",
      "Жимс эсвэл сироптойгоор сервистэй болгоно.",
    ],
    isFavorite: true,
  },

  // ШИНЭ 1
  {
    id: "fried-rice",
    title: "Шарсан будаа",
    alt: "Шарсан будаа",
    tag: "Шинэ",
    meta: "Хурдан өдрийн хоол",
    description: "Ногоо, өндөг, махтай амттай шарсан будаа.",
    image: "/pancake.png",
    cookTime: "20 минут",
    servings: "3",
    difficulty: "Хялбар",
    calories: "450 ккал",
    nutrition: {
      calories: "450 ккал",
      protein: "15г",
      carbs: "55г",
      fat: "18г",
      type: "Энгийн өдөр тутмын хоол",
    },
    ingredients: ["Будаа", "Өндөг", "Лууван", "Мах"],
    lifestyle: ["Хурдан хийхэд тохиромжтой", "Оюутнуудад амар"],
    ageGroup: ["Бүх насанд тохиромжтой"],
    steps: [
      "Будаагаа бэлдэнэ.",
      "Ногоо, махаа хуурна.",
      "Будаатай хольж шарна.",
    ],
    isFavorite: false,
  },

  // ШИНЭ 2
  {
    id: "beef-soup",
    title: "Үхрийн махан шөл",
    alt: "Махан шөл",
    tag: "Эрүүл",
    meta: "Дулаан хоол",
    description: "Үхрийн мах, ногоотой шимтэй шөл.",
    image: "/pancake.png",
    cookTime: "60 минут",
    servings: "4",
    difficulty: "Дунд",
    calories: "300 ккал",
    nutrition: {
      calories: "300 ккал",
      protein: "20г",
      carbs: "10г",
      fat: "15г",
      type: "Эрүүл хоол",
    },
    ingredients: ["Мах", "Лууван", "Төмс"],
    lifestyle: ["Дархлаа дэмжинэ", "Өвлийн улиралд тохиромжтой"],
    ageGroup: ["Бүх насанд"],
    steps: ["Махаа чанана.", "Ногоо нэмнэ.", "Амтална."],
    isFavorite: false,
  },

  // ШИНЭ 3
  {
    id: "chicken-salad",
    title: "Тахианы салат",
    alt: "Тахианы салат",
    tag: "Fitness",
    meta: "Хөнгөн оройн хоол",
    description: "Тахианы мах, ногоотой уураг ихтэй салат.",
    image: "/pancake.png",
    cookTime: "25 минут",
    servings: "2",
    difficulty: "Хялбар",
    calories: "280 ккал",
    nutrition: {
      calories: "280 ккал",
      protein: "22г",
      carbs: "12г",
      fat: "10г",
      type: "Фитнесс хоол",
    },
    ingredients: ["Тахиа", "Салат навч", "Өргөст хэмх"],
    lifestyle: ["Жин хасахад тохиромжтой", "Protein өндөр"],
    ageGroup: ["12+ тохиромжтой"],
    steps: ["Тахиа чанана.", "Ногоотой холино.", "Соус нэмнэ."],
    isFavorite: false,
  },
];
// ----- HELPERS -----

// ID-аар 1 recipe авах
export const getRecipeById = (id) =>
  recipes.find((recipe) => recipe.id === id);


// Favorite recipe-ууд авах
export const getFavoriteRecipes = () =>
  recipes.filter((recipe) => recipe.isFavorite);


// Хайлт хийх
export const searchRecipes = (query) => {
  const q = (query || "").toLowerCase().trim();

  if (!q) return recipes;

  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(q) ||
      recipe.description.toLowerCase().includes(q) ||
      recipe.ingredients.some((i) =>
        i.toLowerCase().includes(q)
      )
  );
};


// Default export (optional)
export default {
  recipes,
  getRecipeById,
  getFavoriteRecipes,
  searchRecipes,
};
