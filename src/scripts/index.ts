const hamburgerMenu = document.getElementById("hamburger-menu") as HTMLButtonElement;
const mobileMenu = document.getElementById("mobile-menu") as HTMLDivElement;
const closeMenu = document.getElementById("close-menu") as HTMLButtonElement;

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});