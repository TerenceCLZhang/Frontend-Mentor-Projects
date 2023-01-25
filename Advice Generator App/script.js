const adviceButton = document.getElementById("get-advice");
const adviceText = document.getElementById("advice");
const adviceNumber = document.getElementById("number");

adviceButton.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceText.innerText = data.slip.advice;
    adviceNumber.innerText = data.slip.id;
  } catch (err) {
    adviceText.innerText = "Error getting advice";
    adviceNumber.innerText = "Error getting advice number";
  }
});

window.onload = function () {
  adviceButton.click();
};
