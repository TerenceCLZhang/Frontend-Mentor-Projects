const handleInput = (event, maxLength) => {
  // Truncate the input value if it exceeds the maximum length
  if (event.target.value.length > maxLength) {
    event.target.value = event.target.value.slice(0, maxLength);
  }
};

// Attach event listeners to the card number, expiration month, expiration year, and CVC inputs
document
  .querySelector("#card-number")
  .addEventListener("input", (event) => handleInput(event, 19));
document
  .querySelector("#date-month")
  .addEventListener("input", (event) => handleInput(event, 2));
document
  .querySelector("#date-year")
  .addEventListener("input", (event) => handleInput(event, 2));
document
  .querySelector("#cvc")
  .addEventListener("input", (event) => handleInput(event, 3));
