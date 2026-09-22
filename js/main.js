const FILTERS = {
  "ux-ui": "UX/UI",
  "web-marketing": "Web & marketing",
  studio: "Studio",
};

const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

function normalizeFilter(value) {
  const key = String(value || "")
    .trim()
    .toLowerCase();
  return Object.prototype.hasOwnProperty.call(FILTERS, key) ? key : null;
}

function currentWorkFilter() {
  const query = normalizeFilter(new URLSearchParams(location.search).get("filter"));
  if (query) return query;
  return normalizeFilter(location.hash.replace(/^#/, "")) || "ux-ui";
}

function markWorkFilter() {
  if (!document.body.matches("[data-page='work']")) return;

  const active = currentWorkFilter();
  const params = new URLSearchParams(location.search);
  if (!params.get("filter") && !location.hash) {
    history.replaceState({}, "", "work.html?filter=ux-ui");
  }

  document.querySelectorAll("[data-filter]").forEach((link) => {
    const isActive = link.getAttribute("data-filter") === active;
    if (isActive) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

markWorkFilter();
window.addEventListener("hashchange", markWorkFilter);
