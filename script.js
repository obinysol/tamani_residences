const navbar = document.querySelector("#navbar");
const menuItems = document.querySelectorAll(".menu_item");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

navbar.addEventListener("click", (e) => {
  navbar.querySelectorAll(".menu_item").forEach((item) => {
    item.classList.remove("focused");
  });
  const clicked = e.target.closest(".menu_item");
  clicked.classList.add("focused");
});

const observerOptions = {
  root: null,
  rootMargin: "-20% 0px -70% 0px", // tweak these values
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove active from all links
      menuItems.forEach((link) => link.classList.remove("focused"));

      // Find corresponding nav link and activate it
      let activeLink = document.querySelector(
        `.menu_item[href="#${entry.target.id}"]`,
      );

      // console.log(entry.target.id === "hero");
      if (entry.target.id === "hero") {
        activeLink = document.querySelector('.menu_item[href="#"]');
      }
      if (activeLink) activeLink.classList.add("focused");
    }
  });
}, observerOptions);

// 2. Observe all sections
sections.forEach((section) => observer.observe(section));
