const amount = document.getElementById("bill-amount");
const buttons = document.querySelectorAll(".tip-percentage button");
const percentageButtons = Array.from(buttons);
const customPercentage = document.getElementById("custom-percentage");
const people = document.getElementById("num-people");

let billAmount, numOfPeople, percentage;

let currentPercentageButton;

const updateDisplay = (tipPerPerson, amountPerPerson) => {
  const tip = document.getElementById("tip");
  const total = document.getElementById("total");

  tip.innerText = tipPerPerson;
  total.innerText = amountPerPerson;
};

const UpdateAmount = (billAmount, numOfPeople, percentage) => {
  if (
    billAmount !== null &&
    typeof billAmount !== "undefined" &&
    !isNaN(billAmount) &&
    numOfPeople !== null &&
    typeof numOfPeople !== "undefined" &&
    !isNaN(numOfPeople) &&
    percentage !== null &&
    typeof percentage !== "undefined" &&
    !isNaN(percentage)
  ) {
    let tipAmountPerPerson, totalAmountPerPerson;

    tipAmountPerPerson = ((billAmount * percentage) / numOfPeople).toFixed(2);
    totalAmountPerPerson = (
      (billAmount * (1 + percentage)) /
      numOfPeople
    ).toFixed(2);

    updateDisplay(tipAmountPerPerson, totalAmountPerPerson);
  } else {
    updateDisplay("0.00", "0.00");
  }
  checkReset();
};

amount.addEventListener("change", () => {
  const billDiv = document.getElementById("bill-div");
  const labelsDiv = billDiv.querySelector(".labels");
  const existingErrorMessage = labelsDiv.querySelector(".error-message");
  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }
  billAmount = amount.value;
  amount.classList.remove("error-input");
  if (parseFloat(billAmount) === 0 || billAmount === "") {
    const errorMessage = document.createElement("label");
    errorMessage.setAttribute("for", "bill-amount");
    errorMessage.classList.add("error-message");
    if (parseFloat(billAmount) === 0) {
      errorMessage.innerText = "Can't be Zero";
    } else if (billAmount === "") {
      errorMessage.innerText = "Can't be Empty";
    }
    labelsDiv.appendChild(errorMessage);
    amount.classList.add("error-input");
  } else {
    UpdateAmount(parseFloat(billAmount), numOfPeople, percentage);
  }
  checkReset();
});

people.addEventListener("change", () => {
  const peopleDiv = document.getElementById("people-div");
  const labelsDiv = peopleDiv.querySelector(".labels");
  const existingErrorMessage = labelsDiv.querySelector(".error-message");
  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }
  people.classList.remove("error-input");
  numOfPeople = people.value;
  if (parseInt(numOfPeople) === 0 || numOfPeople === "") {
    const errorMessage = document.createElement("label");
    errorMessage.setAttribute("for", "num-people");
    errorMessage.classList.add("error-message");
    if (parseInt(numOfPeople) === 0) {
      errorMessage.innerText = "Can't be Zero";
    } else if (numOfPeople === "") {
      errorMessage.innerText = "Can't be Empty";
    }
    labelsDiv.appendChild(errorMessage);
    people.classList.add("error-input");
  } else {
    UpdateAmount(billAmount, parseInt(numOfPeople), percentage);
  }
  checkReset();
});

percentageButtons.forEach((percentageButton) => {
  percentageButton.addEventListener("click", () => {
    if (currentPercentageButton) {
      currentPercentageButton.classList.remove("selected");
    }
    currentPercentageButton = percentageButton;
    currentPercentageButton.classList.add("selected");
    percentage = parseFloat(percentageButton.value);
    UpdateAmount(billAmount, numOfPeople, percentage);
    checkReset();
  });
});

customPercentage.addEventListener("change", () => {
  customPercentageValue = customPercentage.value;
  if (customPercentageValue === "") {
    customPercentageValue = 0;
  }
  if (currentPercentageButton) {
    currentPercentageButton.classList.remove("selected");
  }
  currentPercentageButton = undefined;
  percentage = parseFloat(customPercentageValue) / 100;
  UpdateAmount(billAmount, numOfPeople, percentage);
  checkReset();
});
