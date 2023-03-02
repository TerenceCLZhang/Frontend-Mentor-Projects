const openCloseBtn = document.querySelector("#open-close");
const navMenu = document.querySelector(".nav-menu");

openCloseBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  if (navMenu.classList.contains("closed")) {
    navMenu.classList.remove("closed");
    navMenu.classList.add("opened");
    openCloseBtn.classList.add("grayed");
  } else {
    navMenu.classList.add("closed");
    navMenu.classList.remove("opened");
    openCloseBtn.classList.remove("grayed");
  }
});

document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && navMenu.classList.contains("opened")) {
    navMenu.classList.remove("opened");
    navMenu.classList.add("closed");
    openCloseBtn.classList.remove("grayed");
  }
});
