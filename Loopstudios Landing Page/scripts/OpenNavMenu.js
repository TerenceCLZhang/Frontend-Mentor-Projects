const openBtn = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");
const navBar = document.getElementById("nav-bar");

openBtn.addEventListener("click", () => {
  navBar.style.display = "flex";
  document.body.style.overflowY = "hidden";
});

closeBtn.addEventListener("click", () => {
  navBar.style.display = "none";
  document.body.style.overflowY = "visible";
});
