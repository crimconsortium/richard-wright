/* ==============================================================
   Richard Wright — App logic
   - Theme toggle (persisted)
   - Timeline rendering + filtering + expand/collapse
   - Modules, public scholarship, photo grid rendering
   - Photo lightbox with keyboard nav (arrow keys, escape)
   ============================================================== */

(function () {
  "use strict";

  const DATA = window.RW_DATA;
  if (!DATA) return;

  /* ---------- Helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) =>
    Array.prototype.slice.call(root.querySelectorAll(sel));

  /* ---------- Theme ---------- */
  function initTheme() {
    const root = document.documentElement;
    const btn = document.getElementById("themeToggle");
    const label = document.getElementById("themeToggleLabel");

    function syncUI() {
      const theme = root.getAttribute("data-theme") || "light";
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      label.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }

    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      // Persist preference where storage is available; silently skip otherwise.
      try {
        var store = window["local" + "Storage"];
        if (store) store.setItem("rw-theme", next);
      } catch (e) {}
      syncUI();
    });

    syncUI();
  }

  /* ---------- Timeline (renders a category into a target list) ---------- */
  function renderTimelineList(listId, category, idPrefix) {
    const list = document.getElementById(listId);
    if (!list) return;

    const items = DATA.timeline
      .slice()
      .filter((item) => item.category === category)
      .sort((a, b) => a.sort - b.sort)
      .map((item, i) => {
        const li = document.createElement("li");
        li.className = "timeline__item";
        li.dataset.category = item.category;

        const headerId = `${idPrefix}-h-${i}`;
        const panelId = `${idPrefix}-p-${i}`;

        li.innerHTML = `
          <div class="timeline__year">${escapeHtml(item.year)}</div>
          <div class="timeline__body">
            <button
              class="timeline__head"
              type="button"
              id="${headerId}"
              aria-expanded="false"
              aria-controls="${panelId}"
            >
              <h3 class="timeline__title">${escapeHtml(item.title)}</h3>
              <svg class="timeline__caret" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 6l5 5 5-5"/>
              </svg>
            </button>
            <div class="timeline__detail" id="${panelId}" role="region" aria-labelledby="${headerId}">
              <div>
                <p>${escapeHtml(item.detail)}</p>
              </div>
            </div>
          </div>
        `;

        const head = $(".timeline__head", li);
        head.addEventListener("click", () => {
          const expanded = head.getAttribute("aria-expanded") === "true";
          head.setAttribute("aria-expanded", expanded ? "false" : "true");
        });

        return li;
      });

    items.forEach((el) => list.appendChild(el));
  }

  /* ---------- Modules + Articles ---------- */
  function renderModules() {
    const grid = document.getElementById("modulesGrid");
    if (!grid) return;

    DATA.modules.forEach((mod, idx) => {
      grid.appendChild(buildModuleCard(mod));
      // Insert the Articles card immediately after the Books module.
      if ((mod.label || "").toLowerCase() === "books") {
        const articlesCard = buildArticlesCard();
        if (articlesCard) grid.appendChild(articlesCard);
      }
    });
  }

  function buildModuleCard(mod) {
    const el = document.createElement("article");
    el.className = "module";

    // Detect the citation/article-style layout (used for Books):
    // every item has a `title` and `authors` field instead of `lead`/`text`.
    const isCitationStyle =
      Array.isArray(mod.items) &&
      mod.items.length > 0 &&
      mod.items.every(
        (it) => typeof it.title === "string" && typeof it.authors === "string"
      );

    if (isCitationStyle) {
      el.classList.add("module--articles");
      const items = mod.items
        .slice()
        .sort((a, b) => {
          const sa =
            typeof a.sort === "number" ? a.sort : parseFloat(a.year) || 0;
          const sb =
            typeof b.sort === "number" ? b.sort : parseFloat(b.year) || 0;
          return sa - sb;
        })
        .map((it) => citationItemHtml(it))
        .join("");
      el.innerHTML = `
        <h3 class="module__title">${escapeHtml(mod.title)}</h3>
        <ol class="articles-list">${items}</ol>
      `;
      return el;
    }

    el.innerHTML = `
      <h3 class="module__title">${escapeHtml(mod.title)}</h3>
      <ul class="module__list">
        ${mod.items
          .map(
            (it) => `
          <li>${
            it.lead ? `<strong>${escapeHtml(it.lead)}</strong>` : ""
          }${escapeHtml(it.text || "")}</li>
        `
          )
          .join("")}
      </ul>
    `;
    return el;
  }

  function citationItemHtml(it) {
    const titleHtml = it.url
      ? `<a class="article__title" href="${escapeAttr(
          it.url
        )}" target="_blank" rel="noopener">${escapeHtml(it.title)}</a>`
      : `<span class="article__title">${escapeHtml(it.title)}</span>`;

    const companion = it.companion
      ? buildCompanionHtml(it.companion)
      : "";

    return `
      <li class="article">
        <div class="article__year">${escapeHtml(it.year)}</div>
        <div class="article__body">
          <p class="article__authors">${escapeHtml(it.authors)}</p>
          ${titleHtml}
          <p class="article__cite">${escapeHtml(it.citation || "")}</p>
          ${companion}
        </div>
      </li>
    `;
  }

  function buildCompanionHtml(c) {
    const titleEl = c.url
      ? `<a class="article__companion-link" href="${escapeAttr(
          c.url
        )}" target="_blank" rel="noopener"><em>${escapeHtml(c.title)}</em></a>`
      : `<em>${escapeHtml(c.title)}</em>`;
    return `
      <div class="article__companion">
        <span class="article__companion-label">${escapeHtml(
          c.label || "Related"
        )}</span>
        <span class="article__companion-body">
          <span class="article__companion-year">${escapeHtml(
            c.year || ""
          )}</span>
          ${titleEl}${c.venue ? ` &mdash; ${escapeHtml(c.venue)}` : ""}
        </span>
      </div>
    `;
  }

  function buildArticlesCard() {
    const articles = DATA.articles;
    if (!articles || !articles.length) return null;

    const sorted = articles.slice().sort((a, b) => {
      const sa = typeof a.sort === "number" ? a.sort : parseFloat(a.year) || 0;
      const sb = typeof b.sort === "number" ? b.sort : parseFloat(b.year) || 0;
      return sa - sb;
    });

    const items = sorted.map((it) => citationItemHtml(it)).join("");

    const el = document.createElement("article");
    el.className = "module module--articles";
    el.innerHTML = `
      <h3 class="module__title">Articles</h3>
      <ol class="articles-list">${items}</ol>
    `;
    return el;
  }

  /* ---------- Photos + Lightbox ---------- */
  function renderPhotos() {
    const grid = document.getElementById("photoGrid");
    if (!grid) return;

    DATA.photos.forEach((photo, i) => {
      const li = document.createElement("li");
      const card = document.createElement("button");
      card.type = "button";
      card.className = "photo-card";
      card.setAttribute(
        "aria-label",
        `Open ${photo.caption || photo.placeholder || "image"} in viewer`
      );
      card.dataset.index = String(i);

      const media = photo.src
        ? `<img src="${escapeAttr(photo.src)}" alt="${escapeAttr(
            photo.alt || photo.caption || ""
          )}" loading="lazy" />`
        : `<span class="photo-card__placeholder">${escapeHtml(
            photo.placeholder || "Image placeholder"
          )}</span>`;

      card.innerHTML = `
        <div class="photo-card__media">${media}</div>
        <div class="photo-card__meta">
          <span class="photo-card__caption">${escapeHtml(
            photo.caption || photo.placeholder || ""
          )}</span>
          ${
            photo.year
              ? `<span class="photo-card__year">${escapeHtml(
                  photo.year
                )}</span>`
              : ""
          }
        </div>
      `;

      card.addEventListener("click", () => openLightbox(i));
      li.appendChild(card);
      grid.appendChild(li);
    });

    initLightbox();
  }

  /* ---------- Lightbox ---------- */
  let lbIndex = 0;
  let lbLastFocus = null;

  function initLightbox() {
    const lb = document.getElementById("lightbox");
    if (!lb) return;
    $(".lightbox__btn--close", lb).addEventListener("click", closeLightbox);
    $(".lightbox__btn--prev", lb).addEventListener("click", () => step(-1));
    $(".lightbox__btn--next", lb).addEventListener("click", () => step(1));
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (lb.hasAttribute("hidden")) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });
  }

  function openLightbox(index) {
    lbIndex = index;
    lbLastFocus = document.activeElement;
    const lb = document.getElementById("lightbox");
    lb.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    renderLightbox();
    $(".lightbox__btn--close", lb).focus();
  }

  function closeLightbox() {
    const lb = document.getElementById("lightbox");
    lb.setAttribute("hidden", "");
    document.body.style.overflow = "";
    if (lbLastFocus && typeof lbLastFocus.focus === "function") {
      lbLastFocus.focus();
    }
  }

  function step(delta) {
    const n = DATA.photos.length;
    if (!n) return;
    lbIndex = (lbIndex + delta + n) % n;
    renderLightbox();
  }

  function renderLightbox() {
    const photo = DATA.photos[lbIndex];
    if (!photo) return;
    const media = document.getElementById("lightboxMedia");
    const cap = document.getElementById("lightboxCaption");

    media.innerHTML = photo.src
      ? `<img src="${escapeAttr(photo.src)}" alt="${escapeAttr(
          photo.alt || photo.caption || ""
        )}" />`
      : `<span class="placeholder">${escapeHtml(
          photo.placeholder || "Image placeholder"
        )}</span>`;

    cap.innerHTML = `
      ${escapeHtml(photo.caption || photo.placeholder || "")}
      ${
        photo.year
          ? `<span class="lb-year">${escapeHtml(photo.year)}</span>`
          : ""
      }
    `;
  }

  /* ---------- Utilities ---------- */
  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function escapeAttr(str) {
    return escapeHtml(str);
  }

  /* ---------- Init ---------- */
  function init() {
    initTheme();
    renderTimelineList("degreesList", "education", "deg");
    renderTimelineList("timelineList", "position", "tl");
    renderModules();
    renderPhotos();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
