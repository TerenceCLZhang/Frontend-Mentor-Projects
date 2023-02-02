function validateForm() {
  const inputs = [
    {
      id: "cardholder-name",
      container: ".card-name",
    },
    {
      id: "card-number",
      container: ".card-number",
      length: 16,
    },
    {
      id: "date-month",
      container: ".date",
      length: 2,
    },
    {
      id: "date-year",
      container: ".date",
      length: 2,
    },
    {
      id: "cvc",
      container: ".cvc",
      length: 3,
    },
  ];

  let isValid = true;

  for (const input of inputs) {
    const elem = document.getElementById(input.id);
    const value = elem.value;
    const container = document.querySelector(input.container);
    const error = container.querySelector(".error-message");
    if (error) {
      container.removeChild(error);
      elem.classList.remove("error-border");
    }
    if (!value) {
      const newError = document.createElement("p");
      newError.innerHTML = "Can't be blank";
      newError.classList.add("error-message");
      container.appendChild(newError);
      elem.classList.add("error-border");
      isValid = false;
    } else if (input.length && value.length !== input.length) {
      const newError = document.createElement("p");
      newError.innerHTML = `Must be ${input.length} characters long`;
      newError.classList.add("error-message");
      container.appendChild(newError);
      elem.classList.add("error-border");
      isValid = false;
    }
  }

  return isValid;
}
