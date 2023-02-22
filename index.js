// script for correct answer

const correct = document.getElementById("main-button");

correct.addEventListener("click", function () {
  correct.classList.toggle("clicked");
  incorrect.classList.remove("clicked");
  document.getElementById("result").innerHTML = "Good job 😊";
});

// Script for wrong answer

const incorrect = document.getElementById("main-button-two");

incorrect.addEventListener("click", function () {
  incorrect.classList.toggle("clicked");
  correct.classList.remove("clicked");
  document.getElementById("result").innerHTML = "Awww, you got it wrong 😢";
});

// Script for reset

const button = document.getElementById("next-question");
button.addEventListener("click", restart);

function restart() {
  document.getElementById("result").innerHTML = " ";
  alert("Thank you for playing DEMO of the quiz! Stay tuned for the rest 😊");
}
