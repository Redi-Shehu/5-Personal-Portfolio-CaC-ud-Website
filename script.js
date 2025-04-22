const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 40) {
    navbar.classList.add("sticky");
  }
});
