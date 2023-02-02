// Function to format the input text
const formatInput = (input) => {
  let formattedInput = "";
  input = input.replace(/\s+/g, "");
  // Loop through each character in the input string
  for (let i = 0; i < input.length; i++) {
    // If the current character is the fourth character, add a space
    if (i % 4 === 0 && i !== 0) {
      formattedInput += " ";
    }
    formattedInput += input[i];
  }
  return formattedInput;
};

// Get the input element
const input = document.getElementById("card-number");

// Add an input event listener to the input element
input.addEventListener("input", (event) => {
  // Set the value of the input to the formatted input string
  event.target.value = formatInput(event.target.value);
});
