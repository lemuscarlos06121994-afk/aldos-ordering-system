// =================== CLOUDPRNT CONFIG ===================
// IMPORTANT:
// 1) CLOUDPRNT_ENDPOINT must be your Render backend URL + "/submit"
// 2) PRINTER_DEVICE_ID must match the Device ID shown in the printer CloudPRNT status.
const CLOUDPRNT_ENDPOINT = "https://aldos-printcore-server-1.onrender.com/submit";
const PRINTER_DEVICE_ID = "z2q6dwp2hagm";

// =================== MENU DATA ===================
const DATA = [
  {
    id: "pizzas",
    name: "PIZZAS",
    items: [
      {
        id: "pz-1",
        name: "Cheese Pizza",
        desc:
          'Mozzarella cheese. Sizes: Personal 12" $10.90 · Medium 14" $16.60 · Large 16" $17.60',
        price: 17.6,
        sizes: { personal: 10.9, medium: 16.6, large: 17.6 }
      },
      {
        id: "pz-2",
        name: "Tomato Pizza",
        desc:
          'Fresh plum tomato & basil. Sizes: Personal 12" $10.90 · Medium 14" $16.60 · Large 16" $17.60',
        price: 17.6,
        sizes: { personal: 10.9, medium: 16.6, large: 17.6 }
      },

      // ===== GOURMET PIZZAS (all same size prices) =====
      {
        id: "pz-3",
        name: "#1 Taco Pizza (Chicken or Beef)",
        desc:
          'Ranch, cheddar cheese, lettuce, tomato. Sizes: Small 12" $15.00 · Medium 14" $21.65 · Large 16" $22.45',
        price: 22.45,
        sizes: { personal: 15.0, medium: 21.65, large: 22.45 }
      },
      {
        id: "pz-4",
        name: "#2 Buffalo Chicken Pizza",
        desc:
          'Grilled chicken, buffalo sauce and blue cheese. Sizes: Small 12" $15.00 · Medium 14" $21.65 · Large 16" $22.45',
        price: 22.45,
        sizes: { personal: 15.0, medium: 21.65, large: 22.45 }
      },
      {
        id: "pz-5",
        name: "#3 Chicken, Broccoli & Alfredo",
        desc:
          'Chicken, broccoli and Alfredo sauce. Sizes: Small 12" $15.00 · Medium 14" $21.65 · Large 16" $22.45',
        price: 22.45,
        sizes: { personal: 15.0, medium: 21.65, large: 22.45 }
      },
      {
        id: "pz-6",
        name: "#4 Meat Lovers",
        desc:
          'Sausage, pepperoni, bacon and meatballs. Sizes: Small 12" $15.00 · Medium 14" $21.65 · Large 16" $22.45',
        price: 22.45,
        sizes: { personal: 15.0, medium: 21.65, large: 22.45 }
      },
      {
        id: "pz-7",
        name: "#5 Cheese Steak Pizza",
        desc:
          'Mozzarella cheese, steak covered with American cheese. Sizes: Small 12" $15.00 · Medium 14" $21.65 · Large 16" $22.45',
        price: 22.45,
        sizes: { personal: 15.0, medium: 21.65, large: 22.45 }
      },
      {
        id: "pz-8",
        name: "#6 Veggie Spring Garden",
        desc:
          'Mushrooms, spinach, broccoli, fresh tomatoes and garlic. Sizes: Small 12" $15.00 · Medium 14" $21.65 · Large 16" $22.45',
        price: 22.45,
        sizes: { personal: 15.0, medium: 21.65, large: 22.45 }
      },
      {
        id: "pz-9",
        name: "#7 Hawaiian (Red or White)",
        desc:
          'Ham and pineapple. Sizes: Small 12" $15.00 · Medium 14" $21.65 · Large 16" $22.45',
        price: 22.45,
        sizes: { personal: 15.0, medium: 21.65, large: 22.45 }
      },
      {
        id: "pz-10",
        name: "#8 Supreme Works Pizza",
        desc:
          'Pepperoni, sausage, green peppers, mushrooms & onions. Sizes: Small 12" $15.00 · Medium 14" $21.65 · Large 16" $22.45',
        price: 22.45,
        sizes: { personal: 15.0, medium: 21.65, large: 22.45 }
      },
      {
        id: "pz-11",
        name: "#9 Shrimp Pizza",
        desc:
          'Shrimp pizza. Sizes: Small 12" $15.00 · Medium 14" $21.65 · Large 16" $22.45',
        price: 22.45,
        sizes: { personal: 15.0, medium: 21.65, large: 22.45 }
      }
    ]
  },

  // CALZONES
  {
    id: "calzones",
    name: "CALZONES",
    items: [
      {
        id: "cz-1",
        name: "Cheese Calzone",
        desc: "Ricotta & mozzarella. Sizes: Small $11.00 · Large $18.00",
        price: 18.0,
        sizes: { small: 11.0, large: 18.0 },
        isCalzoneOrStromboli: true
      }
    ]
  },

  // STROMBOLI
  {
    id: "stromboli",
    name: "STROMBOLI",
    items: [
      {
        id: "stb-1",
        name: "Cheese Stromboli",
        desc: "Mozzarella cheese. Sizes: Small $11.00 · Large $18.00",
        price: 18.0,
        sizes: { small: 11.0, large: 18.0 },
        isCalzoneOrStromboli: true
      }
    ]
  },

  // WINGS
  {
    id: "wings",
    name: "WINGS",
    items: [
      {
        id: "wg-1",
        name: "Individual Wing",
        desc: "Choose sauce and dressing.",
        price: 1.5
      },
      {
        id: "wg-2",
        name: "Wings (6)",
        desc: "Served with your choice of sauce and blue cheese or ranch.",
        price: 9.0
      },
      {
        id: "wg-3",
        name: "Wings (10)",
        desc: "Served with your choice of sauce and blue cheese or ranch.",
        price: 15.0
      },
      {
        id: "wg-4",
        name: "Wings (12)",
        desc: "Served with your choice of sauce and blue cheese or ranch.",
        price: 18.0
      },
      {
        id: "wg-5",
        name: "Wings (20)",
        desc: "Served with your choice of sauce and blue cheese or ranch.",
        price: 30.0
      },
      {
        id: "wg-6",
        name: "Wings (24)",
        desc: "Served with your choice of sauce and blue cheese or ranch.",
        price: 36.0
      }
    ]
  },

  // CHEESESTEAKS
  {
    id: "cheesesteaks",
    name: "CHEESESTEAKS & CHICKEN CHEESESTEAKS",
    items: [
      {
        id: "cs-1",
        name: "STEAK (NO CHEESE)",
        desc: "Steak, long roll.",
        price: 9.65
      },
      {
        id: "cs-2",
        name: "CHEESE STEAK",
        desc: "Steak, American cheese, long roll.",
        price: 10.25
      },
      {
        id: "cs-3",
        name: "PIZZA STEAK",
        desc: "Steak, tomato sauce, mozzarella cheese, long roll.",
        price: 11.2
      },
      {
        id: "cs-4",
        name: "CHEESE STEAK HOAGIE",
        desc: "Steak, American cheese, lettuce, tomatoes, onions, long roll.",
        price: 11.2
      },
      {
        id: "cs-5",
        name: "SPECIAL CHEESE STEAK",
        desc: "Steak, American cheese, mushrooms, green peppers, onions, tomato sauce, long roll.",
        price: 11.2
      },
      {
        id: "cs-6",
        name: "CHICKEN STEAK (NO CHEESE)",
        desc: "Chicken steak, long roll.",
        price: 8.95
      },
      {
        id: "cs-7",
        name: "CHICKEN CHEESE STEAK",
        desc: "Chicken steak, American cheese, long roll.",
        price: 9.5
      },
      {
        id: "cs-8",
        name: "BUFFALO CHICKEN CHEESE STEAK",
        desc: "Chicken steak, American cheese, blue cheese, hot sauce, long roll.",
        price: 10.6
      },
      {
        id: "cs-9",
        name: "CHICKEN CHEESE STEAK HOAGIE",
        desc: "Chicken steak, American cheese, lettuce, tomatoes, onions, long roll.",
        price: 10.6
      },
      {
        id: "cs-10",
        name: "SPECIAL CHICKEN CHEESE STEAK",
        desc: "Chicken steak, American cheese, mushrooms, green peppers, onions, tomato sauce, long roll.",
        price: 10.6
      }
    ]
  },

  // HOAGIES
  {
    id: "hoagies",
    name: "HOAGIES & HOT SUBS",
    items: [
      {
        id: "hg-1",
        name: "ITALIAN HOAGIE",
        desc: "Ham, salami, provolone, lettuce, tomato, onion, long roll.",
        price: 9.25
      },
      {
        id: "hg-2",
        name: "HAM & CHEESE HOAGIE",
        desc: "Ham, provolone, lettuce, tomato, onion, long roll.",
        price: 9.25
      },
      {
        id: "hg-3",
        name: "AMERICAN HOAGIE",
        desc: "Ham, salami, American cheese, lettuce, tomato, onion, long roll.",
        price: 9.25
      },
      {
        id: "hg-4",
        name: "TURKEY HOAGIE",
        desc: "Turkey, lettuce, tomato, onions, long roll.",
        price: 9.25
      },
      {
        id: "hg-5",
        name: "TUNA HOAGIE",
        desc: "Tuna, lettuce, tomato, onions, long roll.",
        price: 9.25
      },
      {
        id: "hg-6",
        name: "CHICKEN PARMIGIANA",
        desc: "Tomato sauce, Romano cheese & mozzarella cheese, long roll.",
        price: 10.3
      },
      {
        id: "hg-7",
        name: "MEATBALL PARMIGIANA",
        desc: "Tomato sauce, Romano cheese & mozzarella cheese, long roll.",
        price: 10.3
      }
    ]
  },

  // WRAPS
  {
    id: "wraps",
    name: "WRAPS",
    items: [
      {
        id: "wp-1",
        name: "CHEESE STEAK WRAP",
        desc: "Steak, American cheese, lettuce, tomato, onions, choice of dressing. With fries.",
        price: 11.2
      },
      {
        id: "wp-2",
        name: "BUFFALO GRILLED CHICKEN WRAP",
        desc: "Grilled chicken, hot sauce, blue cheese, lettuce, tomato, with fries.",
        price: 11.2
      },
      {
        id: "wp-3",
        name: "GRILLED CHICKEN CAESAR WRAP",
        desc: "Grilled chicken, Parmesan cheese, romaine lettuce, croutons, with fries.",
        price: 11.2
      },
      {
        id: "wp-4",
        name: "CHICKEN PARMIGIANA WRAP",
        desc: "Breaded chicken breast, tomato sauce, mozzarella cheese, with fries.",
        price: 11.2
      },
      {
        id: "wp-5",
        name: "BBQ GRILLED CHICKEN WRAP",
        desc: "Grilled chicken, bacon, lettuce, tomato, with fries.",
        price: 11.4
      },
      {
        id: "wp-6",
        name: "CRISPY CHICKEN WRAP",
        desc: "Crispy chicken, lettuce, tomato, American cheese, choice of dressing, with fries.",
        price: 11.2
      }
    ]
  },

  // BURGERS
  {
    id: "burgers",
    name: "BURGERS",
    items: [
      {
        id: "bg-1",
        name: "HAMBURGER",
        desc: "6oz meat on a round Kaiser roll with fries.",
        price: 9.9
      },
      {
        id: "bg-2",
        name: "CHEESEBURGER",
        desc: "6oz meat on a round Kaiser roll, American cheese, with fries.",
        price: 10.6
      },
      {
        id: "bg-3",
        name: "PIZZA BURGER",
        desc: "6oz meat on a round Kaiser roll, tomato sauce, mozzarella cheese, with fries.",
        price: 10.6
      },
      {
        id: "bg-4",
        name: "CALIFORNIA BURGER",
        desc: "6oz meat on a round Kaiser roll, American cheese, lettuce, tomatoes, onions, mayo & ketchup, with fries.",
        price: 11.2
      },
      {
        id: "bg-5",
        name: "BACON BURGER",
        desc: "6oz meat on a round Kaiser roll, bacon, American cheese, with fries.",
        price: 11.2
      },
      {
        id: "bg-6",
        name: "TEXAS BURGER",
        desc: "6oz meat on a round Kaiser roll, American cheese, lettuce, tomatoes, fried onions, fried mushrooms, mayo, with fries.",
        price: 11.45
      }
    ]
  },

  // APPETIZERS
  {
    id: "appetizers",
    name: "APPETIZERS",
    items: [
      {
        id: "ap-1",
        name: "CHICKEN FINGERS PLATTER",
        desc: "Served with French fries and one dipping sauce.",
        price: 11.55
      },
      { id: "ap-2", name: "FRENCH FRIES", desc: "", price: 4.4 },
      { id: "ap-3", name: "CHEESE FRIES", desc: "Mozzarella cheese.", price: 6.3 },
      {
        id: "ap-3b",
        name: "CHEDDAR SAUCE FRIES",
        desc: "Cheddar cheese.",
        price: 6.3
      },
      { id: "ap-4", name: "ONION RINGS", desc: "Crispy.", price: 5.7 },
      { id: "ap-5", name: "CURLY FRIES", desc: "Crispy.", price: 6.5 },
      {
        id: "ap-6",
        name: "MEGA FRIES",
        desc: "Bacon & mozzarella cheese.",
        price: 7.5
      },
      { id: "ap-7", name: "5 CHICKEN FINGERS", desc: "Crispy.", price: 4.25 },
      {
        id: "ap-8",
        name: "GARLIC BREAD",
        desc: "Crispy, mozzarella & sauce.",
        price: 5.7
      },
      {
        id: "ap-9",
        name: "PIZZA FRIES",
        desc: "Tomato sauce & mozzarella cheese.",
        price: 6.85
      },
      {
        id: "ap-10",
        name: "MOZZARELLA STICKS",
        desc: "With marinara sauce.",
        price: 8.0
      }
    ]
  },

  // SALADS
  {
    id: "salads",
    name: "SALADS",
    items: [
      {
        id: "sl-1",
        name: "GARDEN SALAD",
        desc: "Lettuce, tomato, onions, cucumber. Small or large.",
        price: 8.6,
        sizes: { small: 6.85, large: 8.6 },
        isSalad: true
      },
      {
        id: "sl-2",
        name: "GARDEN SALAD WITH GRILLED CHICKEN",
        desc: "Grilled chicken, lettuce, tomato, cucumber. Small or large.",
        price: 12.0,
        sizes: { small: 9.15, large: 12.0 },
        isSalad: true
      },
      {
        id: "sl-3",
        name: "ANTIPASTO SALAD",
        desc: "Ham, salami, provolone cheese, lettuce, tomato, cucumber. Small or large.",
        price: 12.0,
        sizes: { small: 9.15, large: 12.0 },
        isSalad: true
      },
      {
        id: "sl-4",
        name: "CHEF SALAD",
        desc: "Ham, turkey, provolone cheese, lettuce, tomato, cucumber. Small or large.",
        price: 12.0,
        sizes: { small: 9.15, large: 12.0 },
        isSalad: true
      },
      {
        id: "sl-5",
        name: "TURKEY & CHEESE SALAD",
        desc: "Turkey, provolone cheese, lettuce, tomato, cucumber. Small or large.",
        price: 12.0,
        sizes: { small: 9.15, large: 12.0 },
        isSalad: true
      },
      {
        id: "sl-6",
        name: "TUNA SALAD",
        desc: "Water tuna tossed with mayonnaise, lettuce, tomato, cucumber. Small or large.",
        price: 12.0,
        sizes: { small: 9.15, large: 12.0 },
        isSalad: true
      },
      {
        id: "sl-7",
        name: "CAESAR SALAD",
        desc: "Romaine lettuce, croutons, Parmesan. Small or large.",
        price: 8.9,
        sizes: { small: 7.15, large: 8.9 },
        isSalad: true
      },
      {
        id: "sl-8",
        name: "GRILLED CHICKEN CAESAR SALAD",
        desc: "Romaine lettuce, croutons, Parmesan. Small or large.",
        price: 12.0,
        sizes: { small: 9.15, large: 12.0 },
        isSalad: true
      }
    ]
  },

  // PASTA ENTREES
  {
    id: "pasta",
    name: "PASTA ENTREES",
    items: [
      {
        id: "pa-1",
        name: "CHICKEN PARMIGIANA",
        desc: "Mozzarella cheese & tomato sauce. Served with soup or salad & bread.",
        price: 18.3
      },
      {
        id: "pa-2",
        name: "CHICKEN FRANCAISE",
        desc: "Lemon white wine sauce. Served with soup or salad & bread.",
        price: 19.85
      },
      {
        id: "pa-3",
        name: "CHICKEN MARSALA",
        desc: "Mushrooms, Marsala wine sauce. Served with soup or salad & bread.",
        price: 19.85
      },
      {
        id: "pa-4",
        name: "PASTA VODKA SAUCE",
        desc: "Vodka pink sauce, served with soup or salad & bread.",
        price: 15.85
      },
      {
        id: "pa-5",
        name: "PASTA VODKA SAUCE WITH CHICKEN",
        desc: "Chicken, vodka pink sauce, served with soup or salad & bread.",
        price: 19.85
      },
      {
        id: "pa-6",
        name: "PASTA VODKA SAUCE WITH SHRIMP",
        desc: "Shrimp, vodka pink sauce, served with soup or salad & bread.",
        price: 24.85
      },
      {
        id: "pa-7",
        name: "PASTA ALFREDO SAUCE",
        desc: "Alfredo sauce, served with soup or salad & bread.",
        price: 15.85
      },
      {
        id: "pa-8",
        name: "PASTA ALFREDO SAUCE WITH CHICKEN",
        desc: "Chicken, Alfredo sauce, served with soup or salad & bread.",
        price: 19.85
      },
      {
        id: "pa-9",
        name: "PASTA ALFREDO SAUCE WITH SHRIMP",
        desc: "Shrimp, Alfredo sauce, served with soup or salad & bread.",
        price: 24.85
      },
      {
        id: "pa-10",
        name: "PASTA WITH TOMATO SAUCE",
        desc: "Tomato sauce, served with soup or salad & bread.",
        price: 14.85
      },
      {
        id: "pa-11",
        name: "PASTA WITH TOMATO SAUCE & MEATBALLS",
        desc: "Meatballs, tomato sauce, served with soup or salad & bread.",
        price: 19.85
      },
      {
        id: "pa-12",
        name: "PASTA WITH TOMATO SAUCE & SAUSAGE",
        desc: "Sausage, tomato sauce, served with soup or salad & bread.",
        price: 19.85
      },
      {
        id: "pa-13",
        name: "BAKED ZITI",
        desc: "Oven baked, melted mozzarella cheese.",
        price: 16.0
      },
      {
        id: "pa-14",
        name: "HOMEMADE LASAGNA",
        desc: "Oven baked, melted mozzarella cheese.",
        price: 16.0
      }
    ]
  },

  // DRINKS
  {
    id: "drinks",
    name: "DRINKS",
    items: [
      { id: "dr-1", name: "Can Soda", desc: "", price: 1.2 },
      { id: "dr-2", name: "20 oz Soda", desc: "", price: 2.95 },
      { id: "dr-3", name: "2 Liter Soda", desc: "", price: 4.95 }
    ]
  }
];

// ------------ pizza toppings -------------
const TOPPINGS = [
  { key: "extra_cheese", label: "EXTRA CHEESE" },
  { key: "pepperoni", label: "PEPPERONI" },
  { key: "sausage", label: "SAUSAGE" },
  { key: "meatball", label: "MEATBALL" },
  { key: "ham", label: "HAM" },
  { key: "bacon", label: "BACON" },
  { key: "onions", label: "ONIONS" },
  { key: "mushrooms", label: "MUSHROOMS" },
  { key: "spinach", label: "SPINACH" },
  { key: "broccoli", label: "BROCCOLI" },
  { key: "green_peppers", label: "GREEN PEPPERS" },
  { key: "tomatoes", label: "FRESH TOMATOES" },
  { key: "olives", label: "BLACK OLIVES" },
  { key: "eggplant", label: "EGGPLANT" },
  { key: "ricotta", label: "RICOTTA CHEESE" },
  { key: "chicken", label: "CHICKEN" },
  { key: "steak", label: "STEAK" },
  { key: "shrimp", label: "SHRIMP" }
];

const SIZE_TOPPING = {
  personal: 1.65,
  medium: 2.75,
  large: 3.25,
  small: 1.65
};

const SIZE_BASE_PRICE = {
  personal: 10.9,
  medium: 16.6,
  large: 17.6
};

const SPECIAL_TOPS = new Set(["chicken", "steak", "shrimp"]);

const SIZE_LABEL = {
  personal: 'Personal 12"',
  medium: 'Medium 14"',
  large: 'Large 16"',
  small: "Small",
  largeCal: "Large"
};

const SUB_ADDONS = [
  { key: "ketchup", label: "KETCHUP", price: 0.5 },
  { key: "lettuce", label: "LETTUCE", price: 0.5 },
  { key: "tomato", label: "TOMATO", price: 0.5 },
  { key: "raw_onion", label: "RAW ONION", price: 0.5 },
  { key: "fried_onion", label: "FRIED ONION", price: 0.5 },
  { key: "green_pepper", label: "GREEN PEPPER", price: 0.5 },
  { key: "mushrooms", label: "MUSHROOMS", price: 0.5 },
  { key: "bacon", label: "BACON", price: 0.5 },
  { key: "banana_pepper", label: "BANANA PEPPER", price: 0.5 },
  { key: "mayo", label: "MAYO", price: 0.5 },
  { key: "mustard", label: "MUSTARD", price: 0.5 },
  { key: "hot_sauce", label: "HOT SAUCE", price: 0.5 },
  { key: "jalapeno", label: "JALAPENO", price: 0.5 }
];

const DRINK_FLAVORS = [
  { value: "coke", label: "Coke" },
  { value: "diet_coke", label: "Diet Coke" },
  { value: "sprite", label: "Sprite" },
  { value: "ginger_ale", label: "Ginger Ale" },
  { value: "orange_soda", label: "Orange Soda" },
  { value: "grape_soda", label: "Grape Soda" },
  { value: "iced_tea", label: "Iced Tea" }
];

// ================= HELPERS =================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const money = n => `$${n.toFixed(2)}`;

// ================= DOM REFERENCES =================
const catBar = $("#catBar");
const menuEl = $("#menu");
const cart = $("#cart");
const cartToggle = $("#cartToggle");
const cartItems = $("#cartItems");
const cartCount = $("#cartCount");
const subtotalEl = $("#subtotal");
const taxEl = $("#tax");
const totalEl = $("#total");
const emptyBtn = $("#emptyCart");
const printBtn = $("#print");
const checkoutBtn = $("#checkout");
const qInput = $("#q");

// payment
const payRadios = document.querySelectorAll('input[name="pay"]');
const cardBox = $("#cardFields");
const cardName = $("#cardName");
const cardNumber = $("#cardNumber");
const cardExp = $("#cardExp");
const cardCvv = $("#cardCvv");
const cardZip = $("#cardZip");
const cardSendBtn = $("#cardSend");

// order type
const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');
const deliveryFields = $("#deliveryFields");
const delName = $("#delName");
const delPhone = $("#delPhone");
const delEmail = $("#delEmail");
const delAddress = $("#delAddress");

// MODALS
// pizza
const pizzaModal = $("#pizzaModal");
const pizzaTitleEl = $("#pizzaModalTitle");
const toppingTable = $("#toppingTable");
const pizzaCancel = $("#pizzaCancel");
const pizzaAdd = $("#pizzaAdd");

// subs / burgers / wraps / hoagies
const subModal = $("#subModal");
const subTitleEl = $("#subModalTitle");
const subBasePrice = $("#subBasePrice");
const subAddonsBox = $("#subAddons");
const subSpecialEl = $("#subSpecialInstructions");
const subCancel = $("#subCancel");
const subAdd = $("#subAdd");
const subQtyEl = $("#subQty");
const subMinus = $("#subMinus");
const subPlus = $("#subPlus");
const subTopAdd = $("#subTopAdd");
const subCloseBtn = $("#subCloseBtn");

// wings
const wingModal = $("#wingModal");
const wingTitleEl = $("#wingModalTitle");
const wingPriceEl = $("#wingPrice");
const wingQtyEl = $("#wingQty");
const wingMinus = $("#wingMinus");
const wingPlus = $("#wingPlus");
const wingTopAdd = $("#wingTopAdd");
const wingSpecialEl = $("#wingSpecial");
const wingCancel = $("#wingCancel");
const wingAdd = $("#wingAdd");

// pasta
const pastaModal = $("#pastaModal");
const pastaTitleEl = $("#pastaModalTitle");
const pastaSpecialEl = $("#pastaSpecial");
const pastaCancel = $("#pastaCancel");
const pastaAdd = $("#pastaAdd");

// salads
const saladModal = $("#saladModal");
const saladTitleEl = $("#saladModalTitle");
const saladSpecialEl = $("#saladSpecial");
const saladCancel = $("#saladCancel");
const saladAdd = $("#saladAdd");
const saladSizeBox = $("#saladSize");
const saladExtrasBox = $("#saladExtras");

// appetizers
const appModal = $("#appModal");
const appTitleEl = $("#appModalTitle");
const appBasePriceEl = $("#appPrice");
const appSauceBox = $("#appSauces");
const appExtrasBox = $("#appExtras");
const appSpecialEl = $("#appSpecial");
const appCancel = $("#appCancel");
const appAdd = $("#appAdd");

// drinks
const drinkModal = $("#drinkModal");
const drinkTitleEl = $("#drinkModalTitle");
const drinkPriceEl = $("#drinkPrice");
const drinkFlavorsEl = $("#drinkFlavors");
const drinkSpecialEl = $("#drinkSpecial");
const drinkCancel = $("#drinkCancel");
const drinkAdd = $("#drinkAdd");
const drinkCloseBtn = $("#drinkCloseBtn");
const drinkTopAdd = $("#drinkTopAdd");

// ================= STATE =================
let currentSaladPrices = { small: 0, large: 0 };
let currentPizzaId = null;
let currentSubId = null;
let currentSubPrice = 0;
let currentWingId = null;
let currentWingPrice = 0;
let currentPastaId = null;
let currentPastaPrice = 0;
let currentSaladId = null;
let currentAppId = null;
let currentAppPrice = 0;
let currentDrinkId = null;
let currentDrinkPrice = 0;

const state = {
  cat: "all",
  q: "",
  cart: {},
  payMethod: "cash",
  orderType: "pickup"
};

// ============== FINDERS ==============
function findItemWithSection(id) {
  for (const sec of DATA) {
    const it = sec.items.find(x => x.id === id);
    if (it) return { section: sec, item: it };
  }
  return null;
}

function findItem(id) {
  const res = findItemWithSection(id);
  return res ? res.item : null;
}

// ============== CATEGORIES ==============
function renderCats() {
  const chips = [
    `<button class="chip active" data-cat="all">All</button>`
  ].concat(
    DATA.map(
      s => `<button class="chip" data-cat="${s.id}">${s.name}</button>`
    )
  );
  catBar.innerHTML = chips.join("");
  catBar.addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    $$(".chip", catBar).forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    state.cat = b.dataset.cat;
    renderMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============== MENU (accordion) ==============
function renderMenu() {
  menuEl.innerHTML = "";
  const q = state.q.toLowerCase();
  const sections =
    state.cat === "all" ? DATA : DATA.filter(s => s.id === state.cat);

  sections.forEach((sec, idx) => {
    const wrap = document.createElement("section");
    wrap.className = "section";
    wrap.id = `sec-${sec.id}`;

    const head = document.createElement("button");
    head.className = "section-head";
    head.setAttribute("aria-expanded", idx === 0 ? "true" : "false");
    head.innerHTML = `
      <span class="section-title">${sec.name}</span>
      <span class="chev">›</span>
    `;

    const body = document.createElement("div");
    body.className = "section-body";

    const frag = document.createDocumentFragment();
    sec.items
      .filter(it => {
        if (!q) return true;
        return (
          (it.name || "").toLowerCase().includes(q) ||
          (it.desc || "").toLowerCase().includes(q)
        );
      })
      .forEach(it => {
        const row = document.createElement("div");
        row.className = "item";
        row.innerHTML = `
          <div>
            <div class="item-title">${it.name}</div>
            ${it.desc ? `<div class="item-desc">${it.desc}</div>` : ""}
          </div>
          <div class="item-cta">
            <span class="price">${money(it.price)}</span>
            <button class="btn" data-add="${it.id}">Add</button>
          </div>
        `;
        frag.appendChild(row);
      });

    body.appendChild(frag);
    wrap.appendChild(body);
    menuEl.appendChild(wrap);

    if (idx === 0) {
      wrap.classList.add("open");
      body.style.maxHeight = body.scrollHeight + "px";
    }

    head.addEventListener("click", () => {
      const isOpen = wrap.classList.toggle("open");
      head.setAttribute("aria-expanded", isOpen ? "true" : "false");
      body.style.maxHeight = isOpen ? body.scrollHeight + "px" : "0px";
    });
  });
}

// ============== SEARCH ==============
if (qInput) {
  qInput.addEventListener("input", () => {
    state.q = (qInput.value || "").trim();
    renderMenu();
  });
}

// ============== CART HELPERS ==============
function addToCart(baseId, noteText = "", extraPrice = 0, basePriceOverride = null) {
  const it = findItem(baseId);
  if (!it) return;

  const basePrice =
    basePriceOverride != null ? basePriceOverride : it.price;
  const unitPrice = basePrice + extraPrice;
  const key = noteText
    ? `${baseId}|${noteText}|${unitPrice}`
    : `${baseId}|${unitPrice}`;

  if (!state.cart[key]) {
    state.cart[key] = {
      id: baseId,
      name: it.name,
      basePrice,
      extraPrice,
      unitPrice,
      qty: 0,
      note: noteText
    };
  }
  state.cart[key].qty++;
  renderCart();
}

function modQty(key, delta) {
  if (!state.cart[key]) return;
  state.cart[key].qty += delta;
  if (state.cart[key].qty <= 0) delete state.cart[key];
  renderCart();
}

// ============== RENDER CART ==============
function renderCart() {
  cartItems.innerHTML = "";
  let sub = 0;

  Object.entries(state.cart).forEach(([key, ci]) => {
    sub += ci.unitPrice * ci.qty;

    const encodedKey = encodeURIComponent(key);

    const row = document.createElement("div");
    row.className = "row-item";
    row.innerHTML = `
      <div>
        ${ci.name}
        ${ci.note ? `<div class="cart-note">${ci.note}</div>` : ""}
        <div class="cart-line-btns">
          <button class="cart-edit-btn" data-edit="${encodedKey}">Modify</button>
          <button class="cart-remove-btn" data-remove="${encodedKey}">Delete</button>
        </div>
      </div>
      <div class="qty">
        <button class="qtybtn" data-id="${encodedKey}" data-delta="-1">–</button>
        <strong>${ci.qty}</strong>
        <button class="qtybtn" data-id="${encodedKey}" data-delta="1">+</button>
      </div>
      <div><strong>${money(ci.unitPrice * ci.qty)}</strong></div>
    `;
    cartItems.appendChild(row);
  });

  const taxRate = 0.06;
  const tax = sub * taxRate;
  const tot = sub + tax;

  subtotalEl.textContent = money(sub);
  taxEl.textContent = money(tax);
  totalEl.textContent = money(tot);
  cartCount.textContent = Object.values(state.cart).reduce(
    (a, c) => a + c.qty,
    0
  );
}

// ============== GLOBAL CLICKS (Add / qty / delete / modify) ==============
document.addEventListener("click", e => {
  // 1) "Add" button in menu
  const addBtn = e.target.closest("[data-add]");
  if (addBtn) {
    const id = addBtn.dataset.add;
    const info = findItemWithSection(id);
    if (!info) return;

    const sectionId = info.section.id;
    const item = info.item;

    if (sectionId === "pizzas" || sectionId === "calzones" || sectionId === "stromboli") {
      openPizzaModal(id, item.name);
    } else if (
      sectionId === "cheesesteaks" ||
      sectionId === "hoagies" ||
      sectionId === "wraps" ||
      sectionId === "burgers"
    ) {
      openSubModal(id, item.name, item.price);
    } else if (sectionId === "wings") {
      openWingModal(id, item.name, item.price);
    } else if (sectionId === "pasta") {
      openPastaModal(id, item.name, item.price);
    } else if (sectionId === "salads") {
      openSaladModal(id, item.name, item.price);
    } else if (sectionId === "appetizers") {
      openAppModal(id, item.name, item.price);
    } else if (sectionId === "drinks") {
      openDrinkModal(id, item.name, item.price);
    } else {
      addToCart(id);
    }
    return;
  }

  // 2) qty + / - buttons in cart
  const qBtn = e.target.closest(".qtybtn");
  if (qBtn) {
    const key = decodeURIComponent(qBtn.dataset.id);
    modQty(key, parseInt(qBtn.dataset.delta, 10));
    return;
  }

  // 3) DELETE line
  const removeBtn = e.target.closest(".cart-remove-btn");
  if (removeBtn) {
    const key = decodeURIComponent(removeBtn.dataset.remove);
    if (state.cart[key]) {
      delete state.cart[key];
      renderCart();
    }
    return;
  }

  // 4) MODIFY line
  const editBtn = e.target.closest(".cart-edit-btn");
  if (editBtn) {
    const key = decodeURIComponent(editBtn.dataset.edit);
    const ci = state.cart[key];
    if (!ci) return;

    if (ci.qty > 1) {
      ci.qty -= 1;
    } else {
      delete state.cart[key];
    }
    renderCart();

    const info = findItemWithSection(ci.id);
    if (!info) return;

    const sectionId = info.section.id;
    const baseId = ci.id;
    const item = info.item;

    if (sectionId === "pizzas" || sectionId === "calzones" || sectionId === "stromboli") {
      openPizzaModal(baseId, item.name);
    } else if (
      sectionId === "cheesesteaks" ||
      sectionId === "hoagies" ||
      sectionId === "wraps" ||
      sectionId === "burgers"
    ) {
      openSubModal(baseId, item.name, item.price);
    } else if (sectionId === "wings") {
      openWingModal(baseId, item.name, item.price);
    } else if (sectionId === "pasta") {
      openPastaModal(baseId, item.name, item.price);
    } else if (sectionId === "salads") {
      openSaladModal(baseId, item.name, item.price);
    } else if (sectionId === "appetizers") {
      openAppModal(baseId, item.name, item.price);
    } else if (sectionId === "drinks") {
      openDrinkModal(baseId, item.name, item.price);
    }
    return;
  }
});

// ============== PIZZA / CALZONE / STROMBOLI MODAL ==============
function openPizzaModal(pizzaId, pizzaName) {
  if (!pizzaModal || !pizzaTitleEl || !toppingTable) {
    addToCart(pizzaId);
    return;
  }

  currentPizzaId = pizzaId;
  pizzaTitleEl.textContent = pizzaName;

  const sizeRadio = document.querySelector(
    'input[name="pizzaSize"][value="large"]'
  );
  if (sizeRadio) sizeRadio.checked = true;

  const spec = $("#specialInstructions");
  if (spec) spec.value = "";

  let html = `
    <div class="top-header">
      <div>Topping</div>
      <div>Half 1</div>
      <div>Half 2</div>
      <div>Whole</div>
    </div>
  `;

  TOPPINGS.forEach(t => {
    const name = `top-${t.key}`;
    html += `
      <div class="top-row">
        <div class="top-name">${t.label}</div>
        <div class="top-cell"><label><input type="radio" name="${name}" value="half1"></label></div>
        <div class="top-cell"><label><input type="radio" name="${name}" value="half2"></label></div>
        <div class="top-cell"><label><input type="radio" name="${name}" value="whole"></label></div>
      </div>
    `;
  });

  toppingTable.innerHTML = html;
  pizzaModal.classList.remove("hidden");
}

function closePizzaModal() {
  if (!pizzaModal) return;
  pizzaModal.classList.add("hidden");
  currentPizzaId = null;
  if (toppingTable) toppingTable.innerHTML = "";
}

if (pizzaCancel && pizzaModal) {
  pizzaCancel.addEventListener("click", closePizzaModal);
  pizzaModal.addEventListener("click", e => {
    if (e.target === pizzaModal) closePizzaModal();
  });
}

if (pizzaAdd) {
  pizzaAdd.addEventListener("click", () => {
    if (!currentPizzaId) return;

    const sizeRadio = document.querySelector(
      'input[name="pizzaSize"]:checked'
    );
    let size = sizeRadio ? sizeRadio.value : "large";

    const info = findItemWithSection(currentPizzaId);
    const item = info ? info.item : null;

    if (item && item.isCalzoneOrStromboli) {
      if (size === "personal" || size === "medium") size = "small";
    }

    let basePrice;
    if (item && item.sizes) {
      if (item.sizes[size] != null) {
        basePrice = item.sizes[size];
      } else if (item.sizes.large != null) {
        basePrice = item.sizes.large;
      } else {
        basePrice = item.price;
      }
    } else {
      basePrice =
        SIZE_BASE_PRICE[size] != null
          ? SIZE_BASE_PRICE[size]
          : item
          ? item.price
          : 0;
    }

    const toppingBase =
      SIZE_TOPPING[size] != null
        ? SIZE_TOPPING[size]
        : SIZE_TOPPING.large;

    const selections = [];
    let extraPrice = 0;

    TOPPINGS.forEach(t => {
      const sel = document.querySelector(
        `input[name="top-${t.key}"]:checked`
      );
      if (sel) {
        let txt;
        if (sel.value === "half1") txt = "half 1";
        else if (sel.value === "half2") txt = "half 2";
        else txt = "whole";

        let extra;
        if (SPECIAL_TOPS.has(t.key)) {
          extra = sel.value === "whole" ? 5.0 : 3.0;
        } else {
          extra = sel.value === "whole" ? toppingBase : toppingBase / 2;
        }

        extraPrice += extra;
        selections.push(`${t.label} (${txt} +${money(extra)})`);
      }
    });

    const spec = $("#specialInstructions");
    const specialText = spec ? spec.value.trim() : "";

    const sizeText =
      item && item.isCalzoneOrStromboli
        ? size === "small"
          ? "Small"
          : "Large"
        : SIZE_LABEL[size] || 'Large 16"';

    const baseNote = selections.length
      ? `Size: ${sizeText} ${money(
          basePrice
        )} | Toppings: ${selections.join(", ")}`
      : `Size: ${sizeText} ${money(basePrice)}`;

    const note = specialText ? `${baseNote} | Note: ${specialText}` : baseNote;

    addToCart(currentPizzaId, note, extraPrice, basePrice);
    closePizzaModal();
  });
}

// ============== SUB / HOAGIE / WRAP / BURGER MODAL ==============
function openSubModal(id, name, price) {
  currentSubId = id;
  currentSubPrice = price;

  subTitleEl.textContent = name;
  subBasePrice.textContent = money(price);

  let html = '<div class="addons-grid">';
  SUB_ADDONS.forEach(a => {
    html += `
      <label class="addon-item">
        <input type="checkbox" value="${a.key}">
        <span>${a.label} (${money(a.price)})</span>
      </label>
    `;
  });
  html += "</div>";
  subAddonsBox.innerHTML = html;

  if (subSpecialEl) subSpecialEl.value = "";
  if (subQtyEl) subQtyEl.value = 1;

  subModal.classList.remove("hidden");
}

function closeSubModal() {
  subModal.classList.add("hidden");
  currentSubId = null;
  currentSubPrice = 0;
  subAddonsBox.innerHTML = "";
}

subModal.addEventListener("click", e => {
  if (e.target === subModal) closeSubModal();
});
subCancel.addEventListener("click", closeSubModal);
if (subCloseBtn) {
  subCloseBtn.addEventListener("click", closeSubModal);
}

function changeSubQty(delta) {
  if (!subQtyEl) return;
  let q = parseInt(subQtyEl.value, 10);
  if (isNaN(q) || q < 1) q = 1;
  q += delta;
  if (q < 1) q = 1;
  subQtyEl.value = q;
}

if (subMinus) subMinus.addEventListener("click", () => changeSubQty(-1));
if (subPlus) subPlus.addEventListener("click", () => changeSubQty(1));

if (subTopAdd) {
  subTopAdd.addEventListener("click", () => subAdd.click());
}

subAdd.addEventListener("click", () => {
  if (!currentSubId) return;

  let extraPrice = 0;
  const extras = [];

  SUB_ADDONS.forEach(a => {
    const cb = subAddonsBox.querySelector(`input[value="${a.key}"]`);
    if (cb && cb.checked) {
      extraPrice += a.price;
      extras.push(`${a.label} (+${money(a.price)})`);
    }
  });

  const specialText = subSpecialEl ? subSpecialEl.value.trim() : "";

  let note = "";
  if (extras.length) {
    note += `Extras: ${extras.join(", ")}`;
  }
  if (specialText) {
    note += (note ? " | " : "") + `Note: ${specialText}`;
  }

  let qty = 1;
  if (subQtyEl) {
    qty = parseInt(subQtyEl.value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
  }

  for (let i = 0; i < qty; i++) {
    addToCart(currentSubId, note, extraPrice, currentSubPrice);
  }

  closeSubModal();
});

// ============== WINGS MODAL ==================
function openWingModal(id, name, price) {
  if (!wingModal || !wingTitleEl || !wingPriceEl || !wingQtyEl) {
    addToCart(id);
    return;
  }

  currentWingId = id;
  currentWingPrice = price;

  wingTitleEl.textContent = name;
  wingPriceEl.textContent = money(price);
  wingQtyEl.value = 1;

  const defaultSauce = document.querySelector(
    'input[name="wingSauce"][value="bbq"]'
  );
  if (defaultSauce) defaultSauce.checked = true;

  const defaultDress = document.querySelector(
    'input[name="wingDressing"][value="blue"]'
  );
  if (defaultDress) defaultDress.checked = true;

  if (wingSpecialEl) wingSpecialEl.value = "";

  wingModal.classList.remove("hidden");
}

function closeWingModal() {
  if (!wingModal) return;
  wingModal.classList.add("hidden");
  currentWingId = null;
  currentWingPrice = 0;
}

if (wingModal && wingCancel) {
  wingModal.addEventListener("click", e => {
    if (e.target === wingModal) closeWingModal();
  });
  wingCancel.addEventListener("click", closeWingModal);
}

function changeWingQty(delta) {
  if (!wingQtyEl) return;
  let q = parseInt(wingQtyEl.value, 10);
  if (isNaN(q) || q < 1) q = 1;
  q += delta;
  if (q < 1) q = 1;
  wingQtyEl.value = q;
}

if (wingMinus) wingMinus.addEventListener("click", () => changeWingQty(-1));
if (wingPlus) wingPlus.addEventListener("click", () => changeWingQty(1));
if (wingTopAdd && wingAdd) {
  wingTopAdd.addEventListener("click", () => {
    wingAdd.click();
  });
}

if (wingAdd) {
  wingAdd.addEventListener("click", () => {
    if (!currentWingId) return;

    let qty = parseInt(wingQtyEl ? wingQtyEl.value : "1", 10);
    if (isNaN(qty) || qty < 1) qty = 1;

    const sauceSel = document.querySelector(
      'input[name="wingSauce"]:checked'
    );
    const dressSel = document.querySelector(
      'input[name="wingDressing"]:checked'
    );

    const sauceText = sauceSel ? sauceSel.dataset.label || sauceSel.value : "";
    const dressText = dressSel ? dressSel.dataset.label || dressSel.value : "";
    const specialText = wingSpecialEl ? wingSpecialEl.value.trim() : "";

    const parts = [];
    if (sauceText) parts.push(`Sauce: ${sauceText}`);
    if (dressText) parts.push(`Dressing: ${dressText}`);
    if (specialText) parts.push(`Note: ${specialText}`);

    const note = parts.join(" | ");

    for (let i = 0; i < qty; i++) {
      addToCart(currentWingId, note, 0, currentWingPrice);
    }

    closeWingModal();
  });
}

// ============== PASTA MODAL ==============
function openPastaModal(id, name, price) {
  if (!pastaModal || !pastaTitleEl) {
    addToCart(id);
    return;
  }

  currentPastaId = id;
  currentPastaPrice = price;

  pastaTitleEl.textContent = name;
  const priceEl = document.getElementById("pastaPrice");
  if (priceEl) priceEl.textContent = money(price);

  document.querySelectorAll('input[name="pastaShape"]').forEach(r => {
    r.checked = r.defaultChecked;
    r.dataset.wasChecked = r.checked ? "true" : "false";
  });

  document.querySelectorAll('input[name="pastaSide"]').forEach(r => {
    r.checked = r.defaultChecked;
    r.dataset.wasChecked = r.checked ? "true" : "false";
  });

  document.querySelectorAll('input[name="pastaDressing"]').forEach(r => {
    r.checked = r.defaultChecked;
    r.dataset.wasChecked = r.checked ? "true" : "false";
  });

  const extraShrimp = document.getElementById("pastaExtraShrimp");
  if (extraShrimp) extraShrimp.checked = false;

  if (pastaSpecialEl) pastaSpecialEl.value = "";

  pastaModal.classList.remove("hidden");
}

function closePastaModal() {
  if (!pastaModal) return;
  pastaModal.classList.add("hidden");
  currentPastaId = null;
  currentPastaPrice = 0;
}

if (pastaCancel && pastaModal) {
  pastaCancel.addEventListener("click", closePastaModal);
  pastaModal.addEventListener("click", e => {
    if (e.target === pastaModal) closePastaModal();
  });
}

if (pastaAdd) {
  pastaAdd.addEventListener("click", () => {
    if (!currentPastaId) return;

    let extraPrice = 0;
    const parts = [];

    const sh = document.querySelector('input[name="pastaShape"]:checked');
    if (sh) {
      const label = sh.dataset.label || sh.value;
      parts.push(`Pasta: ${label}`);
    }

    const sideSel = document.querySelector('input[name="pastaSide"]:checked');
    if (sideSel) {
      const sideLabel = sideSel.dataset.label || sideSel.value;
      parts.push(`Side: ${sideLabel}`);

      if (sideSel.value === "salad") {
        const dressSel = document.querySelector(
          'input[name="pastaDressing"]:checked'
        );
        if (dressSel) {
          const dLabel = dressSel.dataset.label || dressSel.value;
          parts.push(`Dressing: ${dLabel}`);
        }
      }
    }

    const extraShrimp = document.getElementById("pastaExtraShrimp");
    if (extraShrimp && extraShrimp.checked) {
      const p = parseFloat(extraShrimp.dataset.price || "0");
      extraPrice += p;
      parts.push(`Add shrimp (+${money(p)})`);
    }

    const specialText = pastaSpecialEl ? pastaSpecialEl.value.trim() : "";
    if (specialText) parts.push(`Note: ${specialText}`);

    const note = parts.join(" | ");

    addToCart(currentPastaId, note, extraPrice, currentPastaPrice);
    closePastaModal();
  });
}

// ============== SALAD MODAL ==============
function openSaladModal(id, name, price) {
  if (!saladModal || !saladTitleEl) {
    addToCart(id);
    return;
  }

  currentSaladId = id;

  const item = findItem(id);
  const smallPrice =
    item && item.sizes && item.sizes.small != null
      ? item.sizes.small
      : price;
  const largePrice =
    item && item.sizes && item.sizes.large != null
      ? item.sizes.large
      : price;

  currentSaladPrices = {
    small: smallPrice,
    large: largePrice
  };

  saladTitleEl.textContent = name;

  if (saladSizeBox) {
    saladSizeBox.innerHTML = `
      <label>
        <input type="radio" name="saladSize" value="small">
        Small ${money(smallPrice)}
      </label>
      <label>
        <input type="radio" name="saladSize" value="large" checked>
        Large ${money(largePrice)}
      </label>
    `;
  }

  if (saladSpecialEl) saladSpecialEl.value = "";

  saladModal.classList.remove("hidden");
}

function closeSaladModal() {
  if (!saladModal) return;
  saladModal.classList.add("hidden");
  currentSaladId = null;
  currentSaladPrices = { small: 0, large: 0 };
}

if (saladCancel && saladModal) {
  saladCancel.addEventListener("click", closeSaladModal);
  saladModal.addEventListener("click", e => {
    if (e.target === saladModal) closeSaladModal();
  });
}

if (saladAdd) {
  saladAdd.addEventListener("click", () => {
    if (!currentSaladId) return;

    const sizeSel = document.querySelector(
      'input[name="saladSize"]:checked'
    );
    let sizeKey = "small";
    if (sizeSel && sizeSel.value === "large") {
      sizeKey = "large";
    }

    const basePrice = currentSaladPrices[sizeKey] || 0;
    const sizeText = sizeKey === "small" ? "Small" : "Large";

    let extrasPrice = 0;
    const parts = [`Size: ${sizeText} ${money(basePrice)}`];

    const dSel = document.querySelector(
      'input[name="saladDressing"]:checked'
    );
    if (dSel) {
      const dname = dSel.dataset.label || dSel.value;
      parts.push(`Dressing: ${dname}`);
    }

    if (saladExtrasBox) {
      $$('#saladExtras input[type="checkbox"]').forEach(cb => {
        if (cb.checked) {
          const p = parseFloat(cb.dataset.price || "0");
          extrasPrice += p;
          parts.push(`Extra dressing (+${money(p)})`);
        }
      });
    }

    const specialText = saladSpecialEl ? saladSpecialEl.value.trim() : "";
    if (specialText) parts.push(`Note: ${specialText}`);

    const note = parts.join(" | ");

    addToCart(currentSaladId, note, extrasPrice, basePrice);
    closeSaladModal();
  });
}

// ============== APPETIZER MODAL ==============
function openAppModal(id, name, price) {
  if (!appModal || !appTitleEl) {
    addToCart(id);
    return;
  }

  currentAppId = id;
  currentAppPrice = price;

  appTitleEl.textContent = name;
  if (appBasePriceEl) appBasePriceEl.textContent = money(price);

  if (appSauceBox) {
    const APP_SAUCES = [
      { value: "marinara", label: "Marinara" },
      { value: "blue", label: "Blue cheese" },
      { value: "honey", label: "Honey mustard" },
      { value: "bbq", label: "BBQ sauce" },
      { value: "ranch", label: "Ranch" }
    ];
    let sHtml = "";
    APP_SAUCES.forEach((s, i) => {
      sHtml += `
        <label>
          <input type="radio" name="appSauce" value="${s.value}" data-label="${s.label}" ${i === 0 ? "checked" : ""}>
          ${s.label}
        </label>
      `;
    });
    appSauceBox.innerHTML = sHtml;
  }

  if (appExtrasBox) {
    appExtrasBox.innerHTML = `
      <label class="addon-item">
        <input type="checkbox" value="extra_side" data-price="0.75">
        <span>Add extra side sauce (+$0.75)</span>
      </label>
    `;
  }

  if (appSpecialEl) appSpecialEl.value = "";

  appModal.classList.remove("hidden");
}

function closeAppModal() {
  if (!appModal) return;
  appModal.classList.add("hidden");
  currentAppId = null;
  currentAppPrice = 0;
}

if (appCancel && appModal) {
  appCancel.addEventListener("click", closeAppModal);
  appModal.addEventListener("click", e => {
    if (e.target === appModal) closeAppModal();
  });
}

if (appAdd) {
  appAdd.addEventListener("click", () => {
    if (!currentAppId) return;

    let extraPrice = 0;
    const parts = [];

    const sauceSel = document.querySelector(
      'input[name="appSauce"]:checked'
    );
    if (sauceSel) {
      parts.push(`Included sauce: ${sauceSel.dataset.label || sauceSel.value}`);
    }

    if (appExtrasBox) {
      $$('#appExtras input[type="checkbox"]').forEach(cb => {
        if (cb.checked) {
          const p = parseFloat(cb.dataset.price || "0");
          extraPrice += p;
          parts.push(`Extra side sauce (+${money(p)})`);
        }
      });
    }

    const specialText = appSpecialEl ? appSpecialEl.value.trim() : "";
    if (specialText) parts.push(`Note: ${specialText}`);

    const note = parts.join(" | ");
    addToCart(currentAppId, note, extraPrice, currentAppPrice);
    closeAppModal();
  });
}

// ============== DRINKS MODAL (MULTI CHOICE) ==============
function openDrinkModal(id, name, price) {
  currentDrinkId = id;
  currentDrinkPrice = price;

  drinkTitleEl.textContent = name;
  drinkPriceEl.textContent = money(price);

  let html = "";
  DRINK_FLAVORS.forEach(f => {
    html += `
      <label>
        <input
          type="checkbox"
          name="drinkFlavor"
          value="${f.value}"
          data-label="${f.label}">
        ${f.label}
      </label>
    `;
  });
  drinkFlavorsEl.innerHTML = html;

  if (drinkSpecialEl) drinkSpecialEl.value = "";

  drinkModal.classList.remove("hidden");
}

function closeDrinkModal() {
  drinkModal.classList.add("hidden");
  currentDrinkId = null;
  currentDrinkPrice = 0;
}

drinkModal.addEventListener("click", e => {
  if (e.target === drinkModal) closeDrinkModal();
});
drinkCancel.addEventListener("click", closeDrinkModal);
if (drinkCloseBtn) drinkCloseBtn.addEventListener("click", closeDrinkModal);

if (drinkTopAdd) {
  drinkTopAdd.addEventListener("click", () => {
    drinkAdd.click();
  });
}

drinkAdd.addEventListener("click", () => {
  if (!currentDrinkId) return;

  const selected = Array.from(
    document.querySelectorAll('input[name="drinkFlavor"]:checked')
  );

  if (selected.length === 0) {
    alert("Please select at least one flavor.");
    return;
  }

  const specialText = drinkSpecialEl ? drinkSpecialEl.value.trim() : "";

  selected.forEach(sel => {
    const flavorText = sel.dataset.label || sel.value;
    const parts = [`Flavor: ${flavorText}`];
    if (specialText) parts.push(`Note: ${specialText}`);

    const note = parts.join(" | ");
    addToCart(currentDrinkId, note, 0, currentDrinkPrice);
  });

  closeDrinkModal();
});

// ============== PAYMENT / ORDER TYPE ==============

// payment method (cash/card + show card fields)
payRadios.forEach(r => {
  r.addEventListener("change", () => {
    if (!r.checked) return;
    state.payMethod = r.value;

    if (cardBox) {
      if (state.payMethod === "card") {
        cardBox.classList.remove("hidden");
      } else {
        cardBox.classList.add("hidden");
        if (cardName) cardName.value = "";
        if (cardNumber) cardNumber.value = "";
        if (cardExp) cardExp.value = "";
        if (cardCvv) cardCvv.value = "";
        if (cardZip) cardZip.value = "";
      }
    }
  });
});

// order type (pickup/delivery + show delivery fields)
orderTypeRadios.forEach(r => {
  r.addEventListener("change", () => {
    if (!r.checked) return;
    state.orderType = r.value;

    if (deliveryFields) {
      if (state.orderType === "delivery") {
        deliveryFields.classList.remove("hidden");
      } else {
        deliveryFields.classList.add("hidden");
        if (delName) delName.value = "";
        if (delPhone) delPhone.value = "";
        if (delEmail) delEmail.value = "";
        if (delAddress) delAddress.value = "";
      }
    }
  });
});

// ============== CARD "SEND ORDER" BUTTON ==============
if (cardSendBtn) {
  cardSendBtn.addEventListener("click", () => {
    if (state.payMethod !== "card") {
      alert("Please select 'Card' as payment method first.");
      return;
    }

    const name = cardName ? cardName.value.trim() : "";
    const num = cardNumber ? cardNumber.value.trim() : "";
    const exp = cardExp ? cardExp.value.trim() : "";
    const cvv = cardCvv ? cardCvv.value.trim() : "";
    const zip = cardZip ? cardZip.value.trim() : "";

    if (!name || !num || !exp || !cvv) {
      alert("Please fill in all required card fields (name, number, expiration, CVV).");
      return;
    }

    const last4 = num.slice(-4);

    alert(
      `Card data captured:\n` +
      `Name: ${name}\n` +
      `Card: **** **** **** ${last4}\n` +
      `Exp: ${exp}\n` +
      `ZIP: ${zip || "-"}\n\n` +
      `Now process this card on your terminal and confirm the order.`
    );

    if (checkoutBtn) {
      checkoutBtn.click();
    }
  });
}

// ============== BUILD KITCHEN TICKET (TEXT) ==============
function buildKitchenTicket() {
  const lines = Object.values(state.cart)
    .map(ci => {
      const extraTxt = ci.extraPrice
        ? ` (base ${money(ci.basePrice)} + extra ${money(ci.extraPrice)})`
        : ` (base ${money(ci.basePrice)})`;
      const noteTxt = ci.note ? ` | ${ci.note}` : "";
      return `${ci.qty} x ${ci.name}${noteTxt}${extraTxt} — ${money(
        ci.unitPrice * ci.qty
      )}`;
    })
    .join("\n");

  const payText =
    state.payMethod === "cash"
      ? "CASH"
      : "CREDIT CARD";

  const orderTypeText =
    state.orderType === "delivery"
      ? "DELIVERY (approx. 55 minutes)"
      : "PICKUP (approx. 30 minutes)";

  let deliveryInfo = "";
  if (state.orderType === "delivery") {
    deliveryInfo =
      `\n\nDELIVERY DETAILS:\n` +
      `Name: ${delName && delName.value ? delName.value : "-"}\n` +
      `Phone: ${delPhone && delPhone.value ? delPhone.value : "-"}\n` +
      `Email: ${delEmail && delEmail.value ? delEmail.value : "-"}\n` +
      `Address: ${delAddress && delAddress.value ? delAddress.value : "-"}`;
  }

  const now = new Date();
  const ts =
    now.toLocaleDateString() + " " + now.toLocaleTimeString();

  const txt =
    `ALDO'S PIZZERIA\n` +
    `2070 Street Rd, Bensalem, PA 19020\n` +
    `------------------------------\n` +
    `TIME: ${ts}\n` +
    `ORDER TYPE: ${orderTypeText}\n` +
    `PAYMENT: ${payText}\n` +
    `------------------------------\n` +
    `${lines}\n\n` +
    `TOTAL: ${totalEl.textContent}` +
    deliveryInfo +
    `\n\nTHANK YOU!`;

  return txt;
}

// ============== SEND TO CLOUDPRNT SERVER ==============
async function sendToKitchen(ticketText) {
  if (!ticketText || !CLOUDPRNT_ENDPOINT) {
    console.error("Missing ticket text or CLOUDPRNT_ENDPOINT.");
    return false;
  }

  try {
    const res = await fetch(CLOUDPRNT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ticket: ticketText     // 👈 ESTE es el cambio importante
      })
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("CloudPRNT server returned an error:", errText || res.status);
      alert("Error sending order to kitchen printer.");
      return false;
    }

    console.log("✅ Ticket sent to CloudPRNT server.");
    return true;
  } catch (err) {
    console.error("Error sending ticket to CloudPRNT:", err);
    alert("Network error sending order to kitchen printer.");
    return false;
  }
}

// ============== PRINT BUTTON (BROWSER + CLOUDPRNT) ==============
if (printBtn) {
  printBtn.addEventListener("click", () => {
    const ticket = buildKitchenTicket();

    // Browser print window
    const w = window.open("", "print");
    w.document.write(
      `<pre style="font:16px/1.45 monospace; white-space:pre-wrap;">${ticket}</pre>`
    );
    w.print();

    // Also send to kitchen
    sendToKitchen(ticket);
  });
}

// ============== CHECKOUT BUTTON (SUMMARY + CLOUDPRNT) ==============
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", async () => {
    const payText =
      state.payMethod === "cash"
        ? "CASH"
        : "CREDIT CARD (Visa / MasterCard / Discover / AmEx)";

    const orderTypeText =
      state.orderType === "delivery"
        ? "DELIVERY (approx. 55 minutes)"
        : "PICKUP (approx. 30 minutes)";

    let msg =
      `Total to pay: ${totalEl.textContent}\n` +
      `Order type: ${orderTypeText}\n` +
      `Payment method: ${payText}`;

    if (state.orderType === "delivery") {
      msg +=
        `\n\nDelivery details:` +
        `\nName: ${delName && delName.value ? delName.value : "-"}` +
        `\nPhone: ${delPhone && delPhone.value ? delPhone.value : "-"}` +
        `\nEmail: ${delEmail && delEmail.value ? delEmail.value : "-"}` +
        `\nAddress: ${delAddress && delAddress.value ? delAddress.value : "-"}`;
    }

    if (state.payMethod === "card") {
      msg +=
        `\n\n➡ Please charge this amount on the CREDIT CARD terminal: ${totalEl.textContent}`;
    } else {
      msg += `\n\n➡ Customer will pay CASH at pickup / delivery.`;
    }

    alert(msg);

    const ticket = buildKitchenTicket();
    const ok = await sendToKitchen(ticket);

    if (ok) {
      // Clear cart only if the ticket was successfully sent
      state.cart = {};
      renderCart();
    }
  });
}

// ============== TOGGLE TOPPINGS (click again to undo) ==============
document.addEventListener("click", e => {
  const input = e.target;

  if (
    input &&
    input.tagName === "INPUT" &&
    input.type === "radio" &&
    input.name &&
    input.name.startsWith("top-")
  ) {
    if (input.dataset.wasChecked === "true") {
      input.checked = false;
      input.dataset.wasChecked = "false";
      return;
    }

    const groupName = input.name;
    document
      .querySelectorAll(`input[name="${groupName}"]`)
      .forEach(r => (r.dataset.wasChecked = "false"));

    input.dataset.wasChecked = "true";
  }
});

// ============== CART TOGGLE (MOBILE) ==============
if (cartToggle && cart) {
  cartToggle.addEventListener("click", () => {
    cart.classList.toggle("open");
  });
}

// ============== EMPTY CART BUTTON ==============
if (emptyBtn) {
  emptyBtn.addEventListener("click", () => {
    state.cart = {};
    renderCart();
  });
}

// ============== INIT ==============
renderCats();
renderMenu();
renderCart();
if (cart) {
  cart.classList.add("open");
}
