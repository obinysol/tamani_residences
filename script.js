const navbar = document.querySelector("#navbar");

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
