const adviceButton = document.getElementById("get-advice");
const adviceText = document.getElementById("advice");
const adviceNumber = document.getElementById("number");

const loadAdvice = async () => {
  try {
    const {
      slip: { advice, id },
    } = await (await fetch("https://api.adviceslip.com/advice")).json();
    adviceText.innerText = advice;
    adviceNumber.innerText = id;
  } catch (err) {
    adviceText.innerText = "Error getting advice";
    adviceNumber.innerText = "Error getting advice number";
  }
};

loadAdvice();
adviceButton.addEventListener("click", loadAdvice);
