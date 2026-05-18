// ageGroup enum values:
// "Бүх насанд тохиромжтой" | "Насанд хүрэгчдэд" | "Өсвөр насанд" | "Хүүхдэд тохиромжтой" | "Бага насны хүүхдэд"

export const recipes = [
  {
  id: "tsuivan",
  title: "Цуйван",
  image: "/images/tsuivan.jpg",

  moods: ["Ядарсан", "Эрч хүчтэй"],

  cravings: ["Мах ихтэй", "Монгол хоол"]
},


  {
    id: "creamy-pasta",
    title: "Цөцгийтэй паста",
    alt: "Цөцгийтэй паста",
    tag: "Хадгалсан",
    meta: "Оройн хоол",
    description: "Цөцгийтэй соус, мөөг, бяслагтай өтгөн амттай паста.",
    image: "/OIP.webp",
    cuisine: "Итали",
    cookTime: "35 минут",
    servings: "4",
    difficulty: 5,
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
    ageGroup: ["Бүх насанд тохиромжтой", "Өсвөр насанд"],
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
    image: "/OIP (1).webp",
    cuisine: "Грек",
    cookTime: "15 минут",
    servings: "2",
    difficulty: 2,
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
    ageGroup: ["Бүх насанд тохиромжтой", "Насанд хүрэгчдэд"],
    steps: [
      "Ногоонуудаа угааж жижиглэнэ.",
      "Фета бяслаг, оливаа нэмнэ.",
      "Оливын тос, давсаар амтална.",
      "Хүйтнээр нь шууд сервистэй болгоно.",
    ],
    isFavorite: true,
    moods: ["Идэвхтэй", "Сайхан", "Тайван"],
    cravings: ["Ногоотой", "Хөнгөн", "Эрүүл"],
  },

  {
    id: "pancake",
    title: "Панкейк",
    alt: "Панкейк",
    tag: "Хадгалсан",
    meta: "Өглөөний хурдан сонголт",
    description: "Зөөлөн бүтэцтэй, өглөөний цайнд тохиромжтой амтлаг панкейк.",
    image: "/pancake.png",
    cuisine: "Америк",
    cookTime: "25 минут",
    servings: "4",
    difficulty: 2,
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
    ageGroup: ["Бүх насанд тохиромжтой", "Хүүхдэд тохиромжтой"],
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
    title: "Амталсан будаа",
    alt: "Амталсан будаа",
    tag: "Шинэ",
    meta: "Хурдан өдрийн хоол",
    description: "Ногоо, өндөг, махтай амттай Амталсан будаа.",
    image: "/fried_rice.webp",
    cookTime: "20 минут",
    servings: "3",
    difficulty: "4",
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
    image: "/beef_soup.png",
    cookTime: "60 минут",
    servings: "4",
    difficulty: "5",
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
    image: "/chicken_salad.jpg",
    cookTime: "25 минут",
    servings: "2",
    difficulty: "4",
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
  {
  id: "vegetable-soup",
  title: "Ногоотой шөл",
  alt: "Ногоотой шөл",
  tag: "Healthy",
  meta: "Хөнгөн эрүүл хоол",
  description: "Шинэхэн ногоотой амин дэмтэй шөл.",
  image: "/vegetable_soup.jpg",
  cookTime: "30 минут",
  servings: "3",
  difficulty: "5",
  calories: "180 ккал",
  nutrition: {
    calories: "180 ккал",
    protein: "6г",
    carbs: "20г",
    fat: "5г",
    type: "Эрүүл хоол",
  },
  ingredients: ["Лууван", "Төмс", "Байцаа"],
  lifestyle: ["Vegetarian", "Хөнгөн хоол"],
  ageGroup: ["6+ тохиромжтой"],
  steps: ["Ногоогоо хэрчинэ.", "Буцалгана.", "Амтлаад бэлэн болгоно."],
  isFavorite: false,
},

{
  id: "buuz",
  title: "Бууз",
  alt: "Бууз",
  tag: "Монгол хоол",
  meta: "Уламжлалт хоол",
  description: "Монгол үндэсний ууранд жигнэсэн бууз.",
  image: "/бууз.webp",
  cookTime: "1 цаг",
  servings: "5",
  difficulty: "7",
  calories: "420 ккал",
  nutrition: {
    calories: "420 ккал",
    protein: "18г",
    carbs: "35г",
    fat: "20г",
    type: "Монгол хоол",
  },
  ingredients: ["Гурил", "Үхрийн мах", "Сонгино"],
  lifestyle: ["Traditional food"],
  ageGroup: ["8+ тохиромжтой"],
  steps: ["Гурил элдэнэ.", "Махаа амтална.", "Жигнэнэ."],
  isFavorite: false,
},

{
  id: "huushuur",
  title: "Хуушуур",
  alt: "Хуушуур",
  tag: "Монгол хоол",
  meta: "Шарсан хоол",
  description: "Махтай шарсан хуушуур.",
  image: "/huushuur.jpg",
  cookTime: "40 минут",
  servings: "4",
  difficulty: "8",
  calories: "500 ккал",
  nutrition: {
    calories: "500 ккал",
    protein: "20г",
    carbs: "40г",
    fat: "25г",
    type: "Шарсан хоол",
  },
  ingredients: ["Гурил", "Мах", "Сонгино"],
  lifestyle: ["Traditional food"],
  ageGroup: ["10+ тохиромжтой"],
  steps: ["Гурил бэлтгэнэ.", "Махаа хийнэ.", "Тосонд шарна."],
  isFavorite: false,
},

{
  id: "tsuivan",
  title: "Цуйван",
  alt: "Цуйван",
  tag: "Монгол хоол",
  meta: "Гоймон хоол",
  description: "Мах ногоотой хуурсан цуйван.",
  image: "/tsuivan.jpg",
  cookTime: "45 минут",
  servings: "4",
  difficulty: "6",
  calories: "430 ккал",
  nutrition: {
    calories: "430 ккал",
    protein: "16г",
    carbs: "45г",
    fat: "15г",
    type: "Гоймон хоол",
    
  },
  
  ingredients: ["Гурил", "Мах", "Лууван"],
  lifestyle: ["Traditional food"],
  ageGroup: ["8+ тохиромжтой"],
  steps: ["Гоймон бэлтгэнэ.", "Мах хуурна.", "Жигнэнэ."],
  isFavorite: false,
},

{
  id: "khorkhog",
  title: "Хорхог",
  alt: "Хорхог",
  tag: "Монгол хоол",
  meta: "Уламжлалт махан хоол",
  description: "Халуун чулуун дээр болгосон хорхог.",
  image: "/horhog.webp",
  cookTime: "2 цаг",
  servings: "6",
  difficulty: "9",
  calories: "650 ккал",
  nutrition: {
    calories: "650 ккал",
    protein: "35г",
    carbs: "10г",
    fat: "45г",
    type: "Махан хоол",
  },
  ingredients: ["Хонь", "Төмс", "Лууван"],
  lifestyle: ["Traditional food"],
  ageGroup: ["12+ тохиромжтой"],
  steps: ["Махаа бэлтгэнэ.", "Чулуу халаана.", "Битүү болгоно."],
  isFavorite: false,
},

{
  id: "pizza",
  title: "Pizza",
  alt: "Pizza",
  tag: "Fast Food",
  meta: "Бяслагтай pizza",
  description: "Бяслаг, хиамтай амттай pizza.",
  image: "/pizza.avif",
  cookTime: "35 минут",
  servings: "4",
  difficulty: "6",
  calories: "700 ккал",
  nutrition: {
    calories: "700 ккал",
    protein: "25г",
    carbs: "60г",
    fat: "35г",
    type: "Fast food",
  },
  ingredients: ["Гурил", "Бяслаг", "Хиам"],
  lifestyle: ["Fast food"],
  ageGroup: ["8+ тохиромжтой"],
  steps: ["Гурил бэлтгэнэ.", "Орцоо нэмнэ.", "Шарах шүүгээнд болгоно."],
  isFavorite: false,
},

{
  id: "banshtai-shul",
  title: "Банштай шөл",
  alt: "Банштай шөл",
  tag: "Монгол хоол",
  meta: "Шөлтэй хоол",
  description: "Банштай халуун шөл.",
  image: "/banshtai_shol.webp",
  cookTime: "50 минут",
  servings: "4",
  difficulty: "5",
  calories: "350 ккал",
  nutrition: {
    calories: "350 ккал",
    protein: "15г",
    carbs: "30г",
    fat: "12г",
    type: "Шөлтэй хоол",
  },
  ingredients: ["Гурил", "Мах", "Сонгино"],
  lifestyle: ["Traditional food"],
  ageGroup: ["6+ тохиромжтой"],
  steps: ["Банш хийнэ.", "Шөл буцалгана.", "Баншаа чанана."],
  isFavorite: false,
},

{
  id: "cake",
  title: "Бялуу",
  alt: "Бялуу",
  tag: "Dessert",
  meta: "Амттан",
  description: "Зөөлөн кремтэй бялуу.",
  image: "/cake.webp",
  cookTime: "1 цаг 20 минут",
  servings: "6",
  difficulty: "8",
  calories: "520 ккал",
  nutrition: {
    calories: "520 ккал",
    protein: "6г",
    carbs: "65г",
    fat: "25г",
    type: "Dessert",
  },
  ingredients: ["Гурил", "Өндөг", "Крем"],
  lifestyle: ["Sweet food"],
  ageGroup: ["5+ тохиромжтой"],
  steps: ["Бялууны суурь хийнэ.", "Крем түрхэнэ.", "Хөргөнө."],
  isFavorite: false,
},

{
  id: "zraz",
  title: "Зраз",
  alt: "Зраз",
  tag: "European",
  meta: "Махан хоол",
  description: "Дотроо шанзтай махан зраз.",
  image: "/zraz.jpg",
  cookTime: "45 минут",
  servings: "3",
  difficulty: "7",
  calories: "480 ккал",
  nutrition: {
    calories: "480 ккал",
    protein: "28г",
    carbs: "18г",
    fat: "30г",
    type: "Махан хоол",
  },
  ingredients: ["Үхрийн мах", "Өндөг", "Талхны үйрмэг"],
  lifestyle: ["Protein өндөр"],
  ageGroup: ["10+ тохиромжтой"],
  steps: ["Махаа бэлтгэнэ.", "Шанз хийнэ.", "Шарна."],
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


// ===== HOME PAGE DATA =====

export const moods = [
  "Ядарсан", "Гунигтай", "Тайван",
  "Сайхан", "Даарч байна", "Халууцаж байна",
  "Идэвхтэй", "Залхуу", "Сандарсан", "Эрч хүчтэй"
];

export const cravings = [
  { name: "Чихэрлэг", icon: "🍰" },
  { name: "Халуун",   icon: "🔥" },
  { name: "Ногоотой", icon: "🥗" },
  { name: "Шөлтэй",  icon: "🍜" },
  { name: "Шарсан",  icon: "🍗" },
  { name: "Хөнгөн",  icon: "🥪" },
  { name: "Эрүүл",       icon: "" },
  { name: "Ногоо ихтэй", icon: "" },
  { name: "Мах ихтэй",   icon: "" },
  { name: "Монгол хоол", icon: "" },
  { name: "Эслэгээр баялаг", icon: "" },
];

