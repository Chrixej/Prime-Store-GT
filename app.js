const WA = "50254071797";

const I = {
  1: "images/01-camas-mascotas-a.jpg",
  2: "images/02-combo-navideno.jpg",
  3: "images/03-combo-dulce-navidad.jpg",
  4: "images/04-combo-arbolito.jpg",
  5: "images/05-camas-mascotas-b.jpg",
  6: "images/06-cama-xl-perros.jpg",
  7: "images/07-cojines-sillas.jpg",
  8: "images/08-cortinas-navidenas.jpg",
  9: "images/09-cojines-decorativos.jpg",
  10: "images/10-cojines-navidenos.jpg",
  11: "images/11-portada-familia.jpg",
  12: "images/12-combo-cojines-1.jpg",
  14: "images/14-combo-cojines-2.jpg",
  15: "images/15-combo-cojines-3.jpg"
};

const S = [
  {
    id: "combos", n: "Combos", t: "Combos navideños",
    d: "Combos de cojines de 45×45 cm para vestir tu casa de Navidad.",
    p: ["Combo de 6 cojines: Q219.99", "Combo Navideño y Dulce Navidad: Q120.00 cada uno"],
    im: [4, 12, 14, 15, 2, 3],
    it: [
      ["Combo de 6 cojines", "", "Q219.99"],
      ["Combo Navideño", "", "Q120.00"],
      ["Combo Dulce Navidad", "", "Q120.00"]
    ]
  },
  {
    id: "cojines", n: "Cojines", t: "Cojines navideños",
    d: "Medidas de 45×45 cm.", p: ["1 por Q39.99", "6 por Q229.99"],
    im: [10],
    it: [["Rudy", "6214"], ["Dulce Navidad", "4105"], ["Copos", "4104"], ["Frosty", "6217"], ["Santa", "6218"], ["Destellos", "6219"]]
  },
  {
    id: "cortinas", n: "Cortinas", t: "Cortinas navideñas",
    d: "Sets de cortinas con diseños de temporada.", p: ["Cada set: Q79.99"],
    im: [8],
    it: [["Set de cortinas Encanto Navideño", "6439", "Q79.99"], ["Set de cortinas Cascanueces", "6443", "Q79.99"]]
  },
  {
    id: "sillas", n: "Sillas", t: "Cojines para sillas",
    d: "Medidas de 40×40 cm.", p: ["1 por Q29.99", "4 por Q114.99"],
    im: [7],
    it: [["Vintage", "3129"], ["Velvet", "6227"], ["Navy", "3131"], ["London", "3266"]]
  },
  {
    id: "decorativos", n: "Decorativos", t: "Cojines decorativos",
    d: "Medidas de 45×45 cm.", p: ["1 por Q39.99", "3 por Q114.99"],
    im: [9],
    it: [["Dulce", "5437"], ["Canela", "5438"], ["Oasis", "5439"], ["Jardín", "5448"], ["Primavera", "5444"], ["Radiante", "5451"], ["Dorada", "5447"]]
  },
  {
    id: "mascotas", n: "Mascotas", t: "Camas para mascotas",
    d: "Para perros y gatos. Promo exclusiva.", p: ["1 por Q85.00"],
    im: [1, 5],
    it: [["Tobby", "6038"], ["Bruno", "6059"], ["Coco", "3552"], ["Madison", "5728"], ["Moka", "3551"], ["Velvet", "5726"], ["Sky", "3550"]]
  },
  {
    id: "cama-xl", n: "Cama XL", t: "Cama XL para perros",
    d: "Colección Bruno. 107 cm de diámetro por 10 cm de alto. Amplia y acolchonada, con cobertor removible con zipper para lavarlo. Ideal para perros medianos y grandes.",
    p: ["Precio de introducción: Q240.00"], im: [6],
    it: [["Cama XL Bruno", "6061", "Q240.00"], ["Cama XL Tobby", "6062", "Q240.00"]]
  }
];

const $ = id => document.getElementById(id);
const cart = Object.create(null);
const cartIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 11.5a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.5L21 7H6"/></svg>';

function whatsappLink(message) {
  return "https://api.whatsapp.com/send?phone=" + WA + "&text=" + encodeURIComponent(message);
}
function money(value) {
  return "Q" + value.toFixed(2);
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderCatalog() {
  $("h").src = I[11];

  $("nv").innerHTML = S.map(section =>
    `<a href="#${section.id}">${escapeHtml(section.n)}</a>`
  ).join("");

  $("m").innerHTML = S.map(section => `
    <section id="${section.id}">
      <h2>${escapeHtml(section.t)}</h2>
      <div class="pr">${section.p.map(p => `<span>${escapeHtml(p)}</span>`).join("")}</div>
      <p class="d">${escapeHtml(section.d)}</p>
      <div class="g">
        ${section.im.map(number => `
          <button class="im" type="button" data-image="${number}" aria-label="Ampliar foto de ${escapeHtml(section.t)}">
            <img src="${I[number]}" alt="${escapeHtml(section.t)}" loading="lazy">
          </button>
        `).join("")}
      </div>
      ${section.im.length > 1 ? '<small class="sw">Desliza para ver más fotos</small>' : ""}
      <ul>
        ${section.it.map(([name, code, price]) => {
          const key = section.id + "|" + name;
          return `
            <li>
              <span>${escapeHtml(name)}<small>${[code && "Código " + code, price].filter(Boolean).map(escapeHtml).join(" · ")}</small></span>
              <span class="q">
                <button class="add" type="button" data-k="${escapeHtml(key)}" data-d="1">${cartIcon} Agregar</button>
                <span class="st" hidden>
                  <button type="button" data-k="${escapeHtml(key)}" data-d="-1" aria-label="Quitar uno de ${escapeHtml(name)}">−</button>
                  <b>0</b>
                  <button type="button" data-k="${escapeHtml(key)}" data-d="1" aria-label="Agregar uno de ${escapeHtml(name)}">+</button>
                </span>
              </span>
            </li>`;
        }).join("")}
      </ul>
    </section>
  `).join("");
}

function calculateCart() {
  let total = 0;
  const lines = [];

  for (const section of S) {
    let regularCount = 0;

    for (const [name, code, explicitPrice] of section.it) {
      const quantity = cart[section.id + "|" + name] || 0;
      if (!quantity) continue;

      const codeText = code ? " (código " + code + ")" : "";
      lines.push(quantity + " x " + name + codeText);

      if (section.id === "combos") {
        total += quantity * Number(explicitPrice.replace("Q", ""));
      } else if (!explicitPrice) {
        regularCount += quantity;
      } else {
        total += quantity * Number(explicitPrice.replace("Q", ""));
      }
    }

    const deals = {
      cojines: { unit: 39.99, pack: 6, packPrice: 229.99 },
      cortinas: { unit: 79.99 },
      sillas: { unit: 29.99, pack: 4, packPrice: 114.99 },
      decorativos: { unit: 39.99, pack: 3, packPrice: 114.99 },
      mascotas: { unit: 85 }
    };
    const deal = deals[section.id];

    if (regularCount && deal) {
      total += deal.pack
        ? Math.floor(regularCount / deal.pack) * deal.packPrice + (regularCount % deal.pack) * deal.unit
        : regularCount * deal.unit;
    }
  }

  return { total, lines };
}

function updateCart() {
  const { total, lines } = calculateCart();
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const message = "Hola, quiero hacer este pedido:\\n" + lines.join("\\n") + "\\nTotal estimado: " + money(total);

  $("fab").innerHTML = cartIcon + (count ? `Carrito (${count}) · ${money(total)}` : "Carrito");
  $("cl").innerHTML = lines.length
    ? lines.map(line => `<li>${escapeHtml(line)}</li>`).join("")
    : "<li>Aún no has agregado productos.</li>";
  $("ct").textContent = money(total);
  $("send").href = whatsappLink(message);
  $("cc").hidden = count === 0;
  $("send").hidden = count === 0;
}

function changeQuantity(button) {
  const key = button.dataset.k;
  cart[key] = Math.max(0, (cart[key] || 0) + Number(button.dataset.d));

  const quantity = cart[key];
  const rowControls = button.closest(".q");
  rowControls.querySelector("b").textContent = quantity;
  rowControls.querySelector(".add").hidden = quantity > 0;
  rowControls.querySelector(".st").hidden = quantity === 0;
  updateCart();
}

function closeLightbox() {
  $("lb").hidden = true;
}
function closeCart() {
  $("cp").hidden = true;
}

renderCatalog();
updateCart();

$("m").addEventListener("click", event => {
  const quantityButton = event.target.closest("button[data-k]");
  if (quantityButton) {
    changeQuantity(quantityButton);
    return;
  }

  const imageButton = event.target.closest(".im");
  if (imageButton) {
    const image = imageButton.querySelector("img");
    $("lb").querySelector("img").src = image.src;
    $("lb").hidden = false;
  }
});

$("lb").addEventListener("click", closeLightbox);
$("lb").querySelector(".lightbox-close").addEventListener("click", closeLightbox);
$("fab").addEventListener("click", () => { $("cp").hidden = false; });
$("cx").addEventListener("click", closeCart);
$("continue").addEventListener("click", closeCart);

$("cc").addEventListener("click", async () => {
  const message = "Hola, quiero hacer este pedido:\\n" +
    calculateCart().lines.join("\\n") +
    "\\nTotal estimado: " + money(calculateCart().total);

  try {
    await navigator.clipboard.writeText(message);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = message;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  const button = $("cc");
  button.textContent = "¡Pedido copiado!";
  window.setTimeout(() => { button.textContent = "Copiar pedido"; }, 1800);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLightbox();
    closeCart();
  }
});
