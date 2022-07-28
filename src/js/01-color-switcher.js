const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector("body");

let bodyColor = null;

// stopBtn.setAttribute('disabled', false);



function backgroundChanger() {
    body.style.backgroundColor = getRandomHexColor(); 
}

function handleStartBtn() {
    bodyColor = setInterval(backgroundChanger, 1000);
}

function handleStopBtn() {
    clearInterval(bodyColor);
}


startBtn.addEventListener("click", handleStartBtn);

stopBtn.addEventListener("click", handleStopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}