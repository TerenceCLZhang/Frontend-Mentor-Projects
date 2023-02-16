const buttons = document.querySelectorAll(".buttons button");
const cardContents = document.querySelectorAll(".card .card-contents");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const className = button.textContent.toLowerCase();
    const activeButton = document.querySelector(".active-button");

    if (activeButton) {
      activeButton.classList.remove("active-button");
    }

    button.classList.add("active-button");

    cardContents.forEach((contents) => {
      const elements = contents.querySelectorAll(`.${className}`);
      contents.querySelectorAll("p").forEach((p) => {
        if (!p.classList.contains(className)) {
          p.style.display = "none";
        }
      });
      elements.forEach((element) => {
        element.style.display = "block";
      });
    });
  });
});
