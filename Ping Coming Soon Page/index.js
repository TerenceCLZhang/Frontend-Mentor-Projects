const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.querySelector("input[type='email']");
  const email = emailInput.value;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    let errorMessage = document.querySelector("#error-message");
    if (!errorMessage) {
      const p = document.createElement("p");
      p.textContent = "Please provide a valid email address.";
      p.setAttribute("id", "error-message");
      form.appendChild(p);
      p.classList.add("error-text");
      emailInput.classList.add("email-error");
    }
  } else {
    let errorMessage = document.querySelector("#error-message");
    if (errorMessage) {
      form.removeChild(errorMessage);
      emailInput.classList.remove("email-error");
    }
    form.submit();
  }
});
