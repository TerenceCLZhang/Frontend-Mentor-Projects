const header = document.querySelector("header");

if (mediaQuery.matches) {
  header.classList.remove("mobile-background");
  header.classList.add("desktop-background");
}

mediaQuery.addListener((e) => {
  if (e.matches) {
    header.classList.remove("mobile-background");
    header.classList.add("desktop-background");
  } else {
    header.classList.add("mobile-background");
    header.classList.remove("desktop-background");
  }
});
