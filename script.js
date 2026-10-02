const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
const themeToggle = document.querySelector("#theme-toggle");

const closeMenu = () => {
  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
};

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

mainNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;

  closeMenu();
});

document.addEventListener("click", (event) => {
  if (mainNav.contains(event.target) || menuToggle.contains(event.target)) return;
  closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
