const buttonStartRef = document.querySelector('button[data-start]');
const buttonStopRef = document.querySelector('button[data-stop]');
let timerId = null;


buttonStartRef.addEventListener('click', onButtonStart);
buttonStopRef.addEventListener('click', onButtonStop);



function onButtonStart() {
  
     timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
     }, 1000);
    buttonStartRef.disabled = true;
    buttonStopRef.disabled = false;
}

function onButtonStop() {
    clearInterval(timerId);
    buttonStartRef.disabled = false;
    buttonStopRef.disabled = true;
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}