window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("main-content");

  setTimeout(() => {
    loader.classList.add("hidden");
    content.classList.add("visible");
  }, 2000); // Delay before fading out loader
});

// Toggle menu visibility on small screens
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("menu-open");
  });

  toggle.addEventListener("keypress", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      document.body.classList.toggle("menu-open");
    }
  });

  document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        document.body.classList.remove("menu-open");
      }
    });
  });
});

// GSAP animations
var typed = new Typed(".typed", {
  strings: ["Web Developer", "Graphic Designer"],
  typeSpeed: 50,
  backSpeed: 55,
  loop: true,
});
