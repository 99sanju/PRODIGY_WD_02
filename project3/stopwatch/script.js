const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsList = document.getElementById('laps');

let startTime = 0;
let elapsedTime = 0;
let intervalId;
let isRunning = false;
let lapCount = 0;

function updateDisplay() {
  const now = Date.now();
  elapsedTime = now - startTime;

  const milliseconds = Math.floor((elapsedTime / 10) % 100);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)));

  const formattedTime = `<span class="math-inline">\{<5\>hours\.toString\(\)\.padStart\(2, '0'\)\}\:</span>{minutes.toString().padStart(2, '0')}:<span class="math-inline">\{seconds\.toString\(\)\.padStart\(2, '0'\)\}\.</span>{milliseconds.toString().padStart(3, '0')}`;
  display.textContent = formattedTime;
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateDisplay, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
});

stopBtn.addEventListener('click', () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(intervalId);
