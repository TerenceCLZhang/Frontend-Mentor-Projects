const button = document.querySelector(".share-button");
const profile = document.querySelector(".profile");
const share = document.querySelector(".share");
const footer = document.querySelector(".footer");

profile.style.display = "grid";
share.style.display = "none";

document.addEventListener("click", function (event) {
  if (window.matchMedia("(max-width: 50em)").matches) {
    if (event.target.closest(".share-button")) {
      if (!button.classList.contains("share-button-on")) {
        profile.style.display = "none";
        share.style.display = "grid";
        footer.classList.add("footer-share");
        button.classList.add("share-button-on");
      } else {
        profile.style.display = "grid";
        share.style.display = "none";
        footer.classList.remove("footer-share");
        button.classList.remove("share-button-on");
      }
    }
  } else if (window.matchMedia("(min-width: 50em)").matches) {
    if (event.target.closest(".share-button")) {
      if (!button.classList.contains("share-button-on")) {
        button.classList.add("share-button-on");
        share.style.display = "block";
      } else {
        button.classList.remove("share-button-on");
        share.style.display = "none";
      }
    } else if (
      !event.target.closest(".share") &&
      button.classList.contains("share-button-on")
    ) {
      button.classList.remove("share-button-on");
      share.style.display = "none";
    }
  }
});
