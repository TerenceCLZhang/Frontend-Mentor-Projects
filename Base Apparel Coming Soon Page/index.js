const submitBtn = document.getElementById("submit");

function validateForm() {
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");

  if (!emailInput.checkValidity()) {
    if (emailInput.value === "") {
      errorMessage.innerText = "Please enter an email";
    } else {
      errorMessage.innerText = "Please provide a valid email";
    }
    emailInput.classList.add("input-error", "error-icon");
    submitBtn.classList.add("submit-error");
  } else {
    errorMessage.innerText = "";
    emailInput.classList.remove("input-error", "error-icon");
    submitBtn.classList.remove("submit-error");
  }
}

submitBtn.addEventListener("click", validateForm);
