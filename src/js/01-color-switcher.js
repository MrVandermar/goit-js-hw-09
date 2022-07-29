const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector("body");

let bodyColor = null;

stopBtn.setAttribute('disabled', false);

startBtn.addEventListener("click", handleStartBtn);

stopBtn.addEventListener("click", handleStopBtn);

function backgroundChanger() {
    body.style.backgroundColor = getRandomHexColor(); 
}

function handleStartBtn() {
    bodyColor = setInterval(backgroundChanger, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function handleStopBtn() {
    clearInterval(bodyColor);
     startBtn.disabled = false;
    stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}