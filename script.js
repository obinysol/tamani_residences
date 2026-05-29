const navbar = document.querySelector("#navbar");
const menuItems = document.querySelectorAll(".menu_item");
const menu = document.querySelector(".menu");
const sections = document.querySelectorAll("section, #hero");
const menuHamburger = document.querySelector("#menu_hamburger");
const menuHamburgerLabel = document.querySelector(".menu_hamburger_label");
const tappableElements = [
  ".btn",
  ".menu_item",
  ".listing",
  ".news_entry",
  ".footer_social_icons",
];

window.addEventListener("scroll", () => {
  if (menuHamburger.checked) return;
  if (scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

// console.log(document.querySelectorAll(tappableElements));

document.querySelectorAll(tappableElements).forEach((item) => {
  item.addEventListener("touchstart", () => item.classList.add("tap"), {
    passive: true,
  });
  item.addEventListener(
    "touchend",
    () => {
      setTimeout(() => item.classList.remove("tap"), 120);
    },
    { passive: true },
  );
});

menuHamburgerLabel.addEventListener("click", () => {
  if (!menuHamburger.checked) navbar.classList.add("navbar-scroll");
  if (scrollY == 0 && menuHamburger.checked)
    navbar.classList.remove("navbar-scroll");
});

menu.addEventListener("click", (e) => {
  menu.querySelectorAll(".menu_item").forEach((item) => {
    item.classList.remove("focused");
  });
  const clicked = e.target.closest(".menu_item");
  clicked.classList.add("focused");
  menuHamburger.checked = false;
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
