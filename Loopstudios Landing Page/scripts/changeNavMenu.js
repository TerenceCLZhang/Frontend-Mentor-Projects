const mediaQuery = window.matchMedia("(min-width: 50em)");

if (mediaQuery.matches) {
  navBar.style.display = "grid";
}

mediaQuery.addListener((e) => {
  if (e.matches) {
    navBar.style.display = "grid";
    document.body.style.overflowY = "visible";
  } else {
    navBar.style.display = "none";
  }
});
