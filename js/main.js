const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

const form = document.querySelector("[data-contact-form]");
const success = document.querySelector("[data-form-success]");
const errorBox = document.querySelector("[data-form-error]");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const first = String(data.get("firstName") || "").trim();
    const last = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!first || !last || !email || !message) {
      if (errorBox) {
        errorBox.hidden = false;
        errorBox.textContent = "Please fill in your name, email, and message.";
      }
      return;
    }

    if (errorBox) errorBox.hidden = true;
    form.hidden = true;
    if (success) success.hidden = false;
  });
}
