let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.querySelector("#guessInput");
const guessBtn = document.querySelector("#guessBtn");
const message = document.querySelector("#message");
const attemptsDisplay = document.querySelector("#attempts");
const restartBtn = document.querySelector("#restartBtn");

guessBtn.addEventListener("click", function () {
  let guessValue = guessInput.value;
  const numberValue = Number(guessValue);

  if (!guessValue) {
    message.textContent = "Please enter a number";
    return;
  }
  attempts++;

  if (numberValue === secretNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
    message.className = "green";
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessBtn.disabled = true;
    restartBtn.style.display = "block";
  } else if (numberValue < secretNumber) {
    message.textContent = "Too low! Try again.";
    message.className = "red";
  } else {
    message.textContent = "Too high! Try again";
    message.className = "red";
  }
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
});

restartBtn.addEventListener("click", function () {
  attempts = 0;
  attemptsDisplay.textContent = `Attempts: 0`;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  message.textContent = "";
  restartBtn.style.display = "none";
  guessBtn.disabled = false;
});
