const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
