// ====================== CONFIGURACIÓN BÁSICA ======================

// 🔗 Endpoint de tu servidor CloudPRNT en Render
// Si cambiaste el nombre del servicio, solo cambia esta URL.
const CLOUDPRNT_ENDPOINT =
  "https://aldos-printcore-server-1.onrender.com/submit";

// ====================== ESTADO DEL KIOSCO =========================

const state = {
  items: [], // { id, name, price, qty, notes }
  orderType: "pickup", // "pickup" | "delivery"
  payMethod: "cash" // "cash" | "card"
};

// Impuesto (ajusta si quieres)
const TAX_RATE = 0.06;

// ====================== MENÚ (EJEMPLO) ============================
// Puedes agregar más items y categorías cuando todo esté funcionando.

const MENU = [
  {
    id: "pizzas",
    name: "PIZZAS",
    items: [
      {
        id: "pz-1",
        name: "Cheese Pizza",
        desc: "Mozzarella cheese.",
        price: 17.6
      },
      {
        id: "pz-2",
        name: "Supreme Works Pizza",
        desc: "Pepperoni, sausage, veggies.",
        price: 22.45
      },
      {
        id: "pz-3",
        name: "Shrimp Pizza",
        desc: "Shrimp, garlic, mozzarella.",
        price: 22.45
      }
    ]
  },
  {
    id: "drinks",
    name: "DRINKS",
    items: [
      { id: "dr-1", name: "Can Soda", desc: "", price: 1.2 },
      { id: "dr-2", name: "20 oz Soda", desc: "", price: 2.95 },
      { id: "dr-3", name: "2 Liter Soda", desc: "", price: 4.95 }
    ]
  }
  // Añade aquí más categorías si quieres (calzones, wings, wraps, etc.)
];

// ====================== HELPERS DOM ===============================

const menuContainer = document.getElementById("menu"); // contenedor del menú
const cartList = document.getElementById("cart-items"); // lista del carrito
const subtotalEl = document.getElementById("cart-subtotal");
const taxEl = document.getElementById("cart-tax");
const totalEl = document.getElementById("cart-total");

const orderTypeInputs = document.querySelectorAll(
  'input[name="order-type"]'
);
const payMethodInputs = document.querySelectorAll(
  'input[name="payment-method"]'
);

const checkoutBtn = document.getElementById("checkout-btn");
const printBtn = document.getElementById("print-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

// ====================== UTILIDADES ================================

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

// ====================== RENDER DEL MENÚ ===========================

function renderMenu() {
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  MENU.forEach((category) => {
    const section = document.createElement("section");
    section.className = "menu-section";

    const header = document.createElement("h2");
    header.textContent = category.name;
    section.appendChild(header);

    const list = document.createElement("div");
    list.className = "menu-items";

    category.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "menu-item";

      const info = document.createElement("div");
      info.className = "menu-item-info";

      const nameEl = document.createElement("div");
      nameEl.className = "menu-item-name";
      nameEl.textContent = item.name;

      const descEl = document.createElement("div");
      descEl.className = "menu-item-desc";
      descEl.textContent = item.desc || "";

      info.appendChild(nameEl);
      if (item.desc) info.appendChild(descEl);

      const right = document.createElement("div");
      right.className = "menu-item-right";

      const priceEl = document.createElement("div");
      priceEl.className = "menu-item-price";
      priceEl.textContent = formatMoney(item.price);

      const btn = document.createElement("button");
      btn.className = "btn-add";
      btn.textContent = "Add";
      btn.addEventListener("click", () => addToCart(item));

      right.appendChild(priceEl);
      right.appendChild(btn);

      row.appendChild(info);
      row.appendChild(right);

      list.appendChild(row);
    });

    section.appendChild(list);
    menuContainer.appendChild(section);
  });
}

// ====================== CARRITO ===================================

function addToCart(item) {
  const existing = state.items.find((it) => it.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.items.push({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1,
      notes: ""
    });
  }
  renderCart();
}

function removeFromCart(id) {
  state.items = state.items.filter((it) => it.id !== id);
  renderCart();
}

function changeQty(id, delta) {
  const item = state.items.find((it) => it.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.items = state.items.filter((it) => it.id !== id);
  }
  renderCart();
}

function updateTotals() {
  const subtotal = state.items.reduce(
    (sum, it) => sum + it.price * it.qty,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);
  if (taxEl) taxEl.textContent = formatMoney(tax);
  if (totalEl) totalEl.textContent = formatMoney(total);

  return { subtotal, tax, total };
}

function renderCart() {
  if (!cartList) return;

  cartList.innerHTML = "";

  if (!state.items.length) {
    const empty = document.createElement("div");
    empty.className = "cart-empty";
    empty.textContent = "No items in the order.";
    cartList.appendChild(empty);
    updateTotals();
    return;
  }

  state.items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-item";

    const left = document.createElement("div");
    left.className = "cart-item-left";
    left.textContent = `${item.qty}x ${item.name}`;

    const right = document.createElement("div");
    right.className = "cart-item-right";

    const priceEl = document.createElement("span");
    priceEl.className = "cart-item-price";
    priceEl.textContent = formatMoney(item.price * item.qty);

    const minusBtn = document.createElement("button");
    minusBtn.className = "cart-qty-btn";
    minusBtn.textContent = "-";
    minusBtn.addEventListener("click", () =>
      changeQty(item.id, -1)
    );

    const plusBtn = document.createElement("button");
    plusBtn.className = "cart-qty-btn";
    plusBtn.textContent = "+";
    plusBtn.addEventListener("click", () =>
      changeQty(item.id, +1)
    );

    const delBtn = document.createElement("button");
    delBtn.className = "cart-del-btn";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () =>
      removeFromCart(item.id)
    );

    right.appendChild(priceEl);
    right.appendChild(minusBtn);
    right.appendChild(plusBtn);
    right.appendChild(delBtn);

    row.appendChild(left);
    row.appendChild(right);

    cartList.appendChild(row);
  });

  updateTotals();
}

// ====================== TICKET PARA LA COCINA =====================

function buildKitchenTicket() {
  const { subtotal, tax, total } = updateTotals();

  let lines = [];
  lines.push("ALDO'S PIZZERIA");
  lines.push("KITCHEN ORDER");
  lines.push("---------------------------");
  const now = new Date();
  lines.push(now.toLocaleString());
  lines.push("");

  lines.push(
    `ORDER TYPE: ${
      state.orderType === "delivery" ? "DELIVERY" : "PICKUP"
    }`
  );
  lines.push(
    `PAYMENT: ${
      state.payMethod === "cash"
        ? "CASH"
        : "CREDIT CARD"
    }`
  );
  lines.push("---------------------------");

  if (!state.items.length) {
    // por si acaso
    lines.push("** EMPTY ORDER **");
  } else {
    state.items.forEach((item) => {
      lines.push(
        `${item.qty}x ${item.name}  ${formatMoney(
          item.price * item.qty
        )}`
      );
    });
  }

  lines.push("---------------------------");
  lines.push(`Subtotal: ${formatMoney(subtotal)}`);
  lines.push(`Tax:      ${formatMoney(tax)}`);
  lines.push(`TOTAL:    ${formatMoney(total)}`);
  lines.push("---------------------------");
  lines.push("THANK YOU!");

  return lines.join("\n");
}

// ====================== ENVIAR A CLOUDPRNT ========================

async function sendTicketToKitchen(ticketText) {
  if (!ticketText || !CLOUDPRNT_ENDPOINT) return false;

  try {
    const res = await fetch(CLOUDPRNT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ticket: ticketText })
    });

    if (!res.ok) {
      const msg = await res.text().catch(() => "");
      console.error(
        "CloudPRNT server returned an error:",
        msg || res.status
      );
      alert("Error sending order to kitchen printer.");
      return false;
    }

    console.log("Ticket sent to CloudPRNT server.");
    return true;
  } catch (err) {
    console.error("Error sending ticket to CloudPRNT:", err);
    alert("Network error sending order to kitchen printer.");
    return false;
  }
}

// ====================== BOTÓN PRINT SOLO (BROWSER) ================

if (printBtn) {
  printBtn.addEventListener("click", () => {
    if (!state.items.length) {
      alert("Your cart is empty.");
      return;
    }

    const ticket = buildKitchenTicket();
    const w = window.open("", "print");
    w.document.write(
      `<pre style="font:16px/1.45 monospace; white-space:pre-wrap;">${ticket}</pre>`
    );
    w.print();
  });
}

// ====================== BOTÓN CHECKOUT (ENVÍA + LIMPIA CARRITO) ===

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", async () => {
    if (!state.items.length) {
      alert("Your cart is empty.");
      return;
    }

    const ticket = buildKitchenTicket();

    const ok = await sendTicketToKitchen(ticket);

    if (ok) {
      // solo limpiamos el carrito si el envío fue exitoso
      state.items = [];
      renderCart();
      alert("Order sent to kitchen. Thank you!");
    }
  });
}

// ====================== CLEAR CART BUTTON =========================

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", () => {
    state.items = [];
    renderCart();
  });
}

// ====================== ORDER TYPE & PAYMENT HANDLERS =============

orderTypeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      state.orderType = input.value; // "pickup" | "delivery"
    }
  });
});

payMethodInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      state.payMethod = input.value; // "cash" | "card"
    }
  });
});

// ====================== INIT ======================================

renderMenu();
renderCart();
