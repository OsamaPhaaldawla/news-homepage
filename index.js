let navbar = document.querySelector(".navbar-nav");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close-icon img");
let overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  navbar.classList.add("show");
  overlay.classList.add("show");
});
close.addEventListener("click", () => {
  navbar.classList.remove("show");
  overlay.classList.remove("show");
});
