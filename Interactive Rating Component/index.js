const ratingButtons = document.querySelectorAll(
  ".rating-state-buttons > button"
);
const submitButton = document.getElementsByClassName(
  "rating-state-submit-button"
)[0];
const ratingState = document.getElementsByClassName("rating-state")[0];
const thankYouState = document.getElementsByClassName("thank-you-state")[0];
const userRating = document.getElementsByClassName(
  "thank-you-state-rating-number"
)[0];
let currentRating;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentRating = button.innerText;
    console.log(currentRating);
  });
});

submitButton.addEventListener("click", () => {
  if (currentRating !== undefined) {
    ratingState.style.display = "none";
    thankYouState.style.display = "inline-block";
    userRating.innerText = currentRating;
  }
});
