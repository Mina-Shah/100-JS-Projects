// Grab inputs
const hoursInput = document.getElementById("hoursInput");
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const messageEl = document.getElementById("message");

let totalSeconds = 0;
let remainingSeconds = 0;
let intervalId = null;

// pad function
function pad(number) {
  return number < 10 ? "0" + number : number;
}

// update display
function updateDisplay(totalSeconds) {
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

// tick function
function tick() {
  remainingSeconds--;
  updateDisplay(remainingSeconds);

  if (remainingSeconds <= 0) {
    remainingSeconds = 0;
    clearInterval(intervalId);
    intervalId = null;
    messageEl.textContent = "Time's up!";
  }
}

// start timer
function startTimer() {
  if (intervalId) return; // already running

  // read user input
  const inputHours = parseInt(hoursInput.value) || 0;
  const inputMinutes = parseInt(minutesInput.value) || 0;
  const inputSeconds = parseInt(secondsInput.value) || 0;

  totalSeconds = inputHours * 3600 + inputMinutes * 60 + inputSeconds;
  remainingSeconds = totalSeconds;

  messageEl.textContent = ""; // clear message
  updateDisplay(remainingSeconds);

  intervalId = setInterval(tick, 1000);
}

// pause timer
function pauseTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

// reset timer
function resetTimer() {
  pauseTimer();
  remainingSeconds = null;
  updateDisplay(remainingSeconds);
  messageEl.textContent = "";
}

// event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
