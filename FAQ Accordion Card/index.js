const questionDivs = document.querySelectorAll(".question-div");

questionDivs.forEach((questionDiv) => {
  questionDiv.addEventListener("click", (event) => {
    // toggle the visibility of the answer element
    const answer = event.currentTarget.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";

    // flip the background image of the button 180 degrees
    const button = event.currentTarget.lastElementChild;
    if (answer.style.display === "block") {
      button.style.transform = "rotate(180deg)";
      // add the question-selected class to the question element
      event.currentTarget.firstElementChild.classList.add("question-selected");
      // add the question-div-selected class to the question-div element
      event.currentTarget.classList.add("question-div-selected");
    } else {
      button.style.transform = "rotate(0deg)";
      // remove the question-selected class from the question element
      event.currentTarget.firstElementChild.classList.remove(
        "question-selected"
      );
      // remove the question-div-selected class from the question-div element
      event.currentTarget.classList.remove("question-div-selected");
    }
  });
});
