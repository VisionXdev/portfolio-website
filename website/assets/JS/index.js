// Scroll background
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("mainNavbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbarMenu");
hamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
});

// GSAP animate on load
window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".navbar-inner", {
    duration: 0.7,
    y: -30,
    opacity: 0,
    ease: "power3.out",
  });
});
