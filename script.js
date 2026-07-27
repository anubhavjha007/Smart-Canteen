// =========================================================
// MOBILE NAV TOGGLE
// Clicking the hamburger icon shows/hides the mobile dropdown
// nav and animates the three bars into an "X".
// =========================================================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");

hamburgerBtn.addEventListener("click", () => {
  // .classList.toggle() adds the class if it's missing, removes it if present.
  // This is what flips the hamburger open/closed on every click.
  hamburgerBtn.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

// ---------------------------------------------------------
// Auto-close mobile nav when a link is clicked
// Without this, clicking "Menu" scrolls the page but the
// dropdown stays open on top of it — annoying UX bug.
// ---------------------------------------------------------
const mobileLinks = mobileNav.querySelectorAll("a");
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("open");
    mobileNav.classList.remove("open");
  });
});