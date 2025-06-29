window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("main-content");

  setTimeout(() => {
    loader.classList.add("hidden");
    content.classList.add("visible");
  }, 2000); // Delay before fading out loader
});

// Hamburger toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", function () {
    document.body.classList.toggle("menu-open");
  });
  toggle.addEventListener("keypress", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      document.body.classList.toggle("menu-open");
    }
  });
  // Close nav on link click (mobile)
  document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        document.body.classList.remove("menu-open");
      }
    });
  });
});

// GSAP animations