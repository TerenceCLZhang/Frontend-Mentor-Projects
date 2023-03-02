const mediaQuery = window.matchMedia("(min-width: 50em)");

const handleMediaQueryChange = (event) => {
  if (event.matches) {
    navMenu.classList.remove("closed");
  } else {
    navMenu.classList.add("closed");
  }
};

mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);
