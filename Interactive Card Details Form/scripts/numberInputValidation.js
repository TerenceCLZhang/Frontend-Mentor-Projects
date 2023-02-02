// Define an array of inputs to be validated
const inputs = [
  document.getElementById("card-number"),
  document.getElementById("date-month"),
  document.getElementById("date-year"),
  document.getElementById("cvc"),
];

// Define an array of invalid characters
const invalidChars = ["-", "+", "e"];

// Loop through the inputs and add a keydown event listener to each input
inputs.forEach((input) => {
  input.addEventListener("keydown", function (e) {
    // Check if the key pressed is included in the invalidChars array
    if (invalidChars.includes(e.key)) {
      // If the key is invalid, prevent the default behavior
      e.preventDefault();
    }
  });
});
