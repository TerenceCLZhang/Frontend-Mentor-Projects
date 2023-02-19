const resetButton = document.getElementById("reset-btn");

const enableButton = () => {
  resetButton.classList.add("enabled");
  resetButton.classList.remove("disabled");
  resetButton.disabled = false;
};

const disableButton = () => {
  resetButton.classList.remove("enabled");
  resetButton.classList.add("disabled");
  resetButton.disabled = true;
};

const resetValues = () => {
  amount.value = "";
  people.value = "";
  customPercentage.value = "";
  if (currentPercentageButton) {
    currentPercentageButton.classList.remove("selected");
  }
  currentPercentageButton = undefined;
  updateDisplay("0.00", "0.00");
};

const checkReset = () => {
  if (billAmount !== "" || numOfPeople !== "" || percentage !== "") {
    enableButton();
  } else {
    disableButton();
  }
};

resetButton.addEventListener("click", () => {
  resetValues();
  disableButton();
});
