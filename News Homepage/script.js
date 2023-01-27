const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close");
const navBar = document.getElementsByClassName("links")[0];

menuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  navBar.classList.add("links-open");
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  navBar.classList.remove("links-open");
  document.body.style.overflow = "auto";
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".links")) {
    navBar.classList.remove("links-open");
    document.body.style.overflow = "auto";
  }
});
