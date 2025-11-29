const daysEl = document.getElementById('days')
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const messageEl = document.getElementById("message");

function pad(number) {
    if (number < 10) {
        return "0" + number
    } else{
        return number
    }
}

function updateDisplay(totalSeconds) {
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
 }

 let totalSeconds = 5 * 60* 60 ;
 let remainingSeconds = totalSeconds;
 let intervalId = null;

 updateDisplay(remainingSeconds)


 function tick() {
    remainingSeconds--
    updateDisplay(remainingSeconds)
    if (remainingSeconds <= 0 ) {
        remainingSeconds = 0
        clearInterval(intervalId)
        intervalId = null
        messageEl.textContent = "Times up!"
    }
 }

 
 function startTimer() {
   if (intervalId) return;
   messageEl.textContent = ""
   intervalId = setInterval(tick, 1000);
 }

 function pauseTimer() {
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
    }
 }

 function resetTimer() {
    pauseTimer()
    remainingSeconds = totalSeconds
    updateDisplay(remainingSeconds)
    messageEl.textContent = ""
 }

 startBtn.addEventListener('click', startTimer)
 pauseBtn.addEventListener('click', pauseTimer)
 resetBtn.addEventListener('click', resetTimer)