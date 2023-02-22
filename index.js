let answerSelected = false; // Flag variable to track if the user has selected an answer

// Script for correct answer
const correct = document.getElementById("main-button");

correct.addEventListener("click", function () {
  if (!answerSelected) {
    // Check if an answer has not been selected yet
    correct.classList.toggle("clicked");
    incorrect.classList.remove("clicked");
    answerSelected = true; // Set flag to true since an answer has been selected
    document.getElementById("result").innerHTML = "Good job 😊";
    document.getElementById("score").innerHTML = "Score: 1";
    disableOptions(); // Disable other options since an answer has been selected
  }
});

// Script for wrong answer
const incorrect = document.getElementById("main-button-two");

incorrect.addEventListener("click", function () {
  if (!answerSelected) {
    // Check if an answer has not been selected yet
    incorrect.classList.toggle("clicked");
    correct.classList.remove("clicked");
    answerSelected = true; // Set flag to true since an answer has been selected
    document.getElementById("result").innerHTML = "Awww, you got it wrong 😢";
    document.getElementById("score").innerHTML = "Score: 0";
    disableOptions(); // Disable other options since an answer has been selected
  }
});

// Script for reset
const button = document.getElementById("next-question");
button.addEventListener("click", restart);

function restart() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("score").innerHTML = "ㅤ";
  correct.classList.remove("clicked");
  incorrect.classList.remove("clicked");
  answerSelected = false; // Reset flag variable
  enableOptions(); // Enable all options
  alert("Thank you for playing DEMO of the quiz! Stay tuned for the rest 😊");
}

// Disable other options
function disableOptions() {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    if (option !== correct && option !== incorrect) {
      option.disabled = true;
    }
  });
}

// Enable all options
function enableOptions() {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.disabled = false;
    option.classList.remove("clicked");
  });
}
