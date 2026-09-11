/* ============================================================
   COREWEAR — MOTOR DEL SITIO
   No necesitas editar este archivo. Lee los productos desde
   products.js y los dibuja automáticamente donde corresponda.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  markActiveNavLink();
  setupMobileNav();
  renderAllProductGrids();
  setupFilterBars();
  setupYear();
});

/* Marca el link del menú de la página actual */
function markActiveNavLink() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path) link.classList.add("active");
  });
}

/* Botón hamburguesa en móvil */
function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

/* Año automático en el footer */
function setupYear() {
  document.querySelectorAll(".auto-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* Construye una tarjeta de producto (HTML) */
function buildProductCard(p) {
  const tagHtml = p.tag ? `<span class="tag">${p.tag}</span>` : "";
  const fitHtml = p.fit && p.fit !== "N/A" ? `Fit: ${p.fit} · ` : "";
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="thumb">
        ${tagHtml}
        <img src="${p.image}" alt="${p.name} — ${p.brand}"
             onerror="this.style.display='none'; this.parentElement.querySelector('.thumb-fallback').style.display='flex';">
        <div class="thumb-fallback" style="display:none; position:absolute; inset:0; align-items:center; justify-content:center; flex-direction:column; gap:6px; color:#7a8087; font-size:.78rem;">
          <span>Foto pendiente</span>
        </div>
      </div>
      <div class="body">
        <span class="brand">${p.brand}</span>
        <h4>${p.name}</h4>
        <span class="rating">★ ${p.rating.toFixed(1)}/10 COREWEAR</span>
        <span class="meta">${fitHtml}Material: ${p.material}</span>
        <span class="price">$${p.price} MXN aprox.</span>
        <p class="opinion">${p.opinion}</p>
        <span class="disclaimer">El precio puede cambiar según la tienda.</span>
        <a class="btn btn-primary" href="${p.link}" target="_blank" rel="nofollow sponsored noopener">Ver producto</a>
      </div>
    </article>`;
}

/* Busca todos los contenedores [data-product-grid] y los llena
   según sus atributos data-section / data-gender / data-category */
function renderAllProductGrids() {
  document.querySelectorAll("[data-product-grid]").forEach((grid) => {
    fillGrid(grid);
  });
}

function fillGrid(grid) {
  const section = grid.dataset.section || null;
  const gender = grid.dataset.gender || null;
  const category = grid.dataset.category || null;
  const limit = grid.dataset.limit ? parseInt(grid.dataset.limit, 10) : null;

  let items = PRODUCTS.filter((p) => {
    if (section && !p.sections.includes(section)) return false;
    if (gender && p.gender !== gender && p.gender !== "unisex") return false;
    if (category && p.category !== category) return false;
    return true;
  });

  if (limit) items = items.slice(0, limit);

  if (items.length === 0) {
    grid.innerHTML = `<div class="empty-state">Todavía no hay productos aquí. Agrégalos en js/products.js.</div>`;
    return;
  }

  grid.innerHTML = items.map(buildProductCard).join("");
}

/* Filtros de categoría por botones (opcional, usados en Top Picks / Ofertas) */
function setupFilterBars() {
  document.querySelectorAll("[data-filter-bar]").forEach((bar) => {
    const gridSelector = bar.dataset.filterBar;
    const grid = document.querySelector(gridSelector);
    if (!grid) return;

    bar.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const value = btn.dataset.value;
        if (value === "all") {
          delete grid.dataset.category;
        } else {
          grid.dataset.category = value;
        }
        fillGrid(grid);
      });
    });
  });
}
