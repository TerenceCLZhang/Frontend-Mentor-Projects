const inputs = document.querySelectorAll("input:not([type='submit'])");
const submitBtn = document.getElementById("submit");

inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    removeErrors(input);
    if (!input.checkValidity()) {
      invalidInput(input);
    }
  });
});

submitBtn.addEventListener("click", function () {
  for (let input of inputs) {
    removeErrors(input);
    if (!input.checkValidity()) {
      invalidInput(input);
    }
  }
});

function removeErrors(input) {
  removeErrorText(input);
  removeErrorIcon(input);
  removeErrorBorder(input);
}

function removeErrorText(input) {
  const parent = input.parentElement;
  const lastChild = parent.lastElementChild;
  if (lastChild.tagName === "SPAN") {
    parent.removeChild(lastChild);
  }
}

function removeErrorIcon(input) {
  input.classList.remove("error-icon");
}

function removeErrorBorder(input) {
  input.classList.remove("error-border");
}

function invalidInput(invalidInputItem) {
  addErrorText(invalidInputItem);
  addErrorIcon(invalidInputItem);
  addErrorBorder(invalidInputItem);
}

function addErrorText(invalidInputItem) {
  const errorMessage = document.createElement("span");
  let name = invalidInputItem.placeholder;

  console.log(invalidInputItem.value);

  if (name == "Email Address" && invalidInputItem.value !== "") {
    errorMessage.innerHTML = "Looks like this is not an email";
  } else {
    errorMessage.innerHTML = `${name} canot be empty`;
  }

  errorMessage.setAttribute("class", "error-text");
  invalidInputItem.parentElement.append(errorMessage);
}

function removePlaceholder(invalidInputItem) {
  invalidInputItem.placeholder = "";
}

function addErrorIcon(invalidInputItem) {
  invalidInputItem.classList.add("error-icon");
}

function addErrorBorder(invalidInputItem) {
  invalidInputItem.classList.add("error-border");
}
