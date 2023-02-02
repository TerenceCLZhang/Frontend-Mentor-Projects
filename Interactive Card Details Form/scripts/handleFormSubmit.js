const form = document.querySelector("form");
const completedState = document.querySelector(".completed-state");
const button = document.getElementById("completed-state-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  // Hide the form and show the completed state
  form.style.display = "none";
  completedState.style.display = "block";
});

button.addEventListener("click", function () {
  // Refresh the page
  location.reload();
});
