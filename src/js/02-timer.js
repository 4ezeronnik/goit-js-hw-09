
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const buttonStartRef = document.querySelector('button[data-start]');
const inputRef = document.querySelector('input[type="text"]');

const dataSecondsTimer = document.querySelector('span[data-seconds]');
const dataMinutesTimer = document.querySelector('span[data-minutes]');
const dataHoursTimer = document.querySelector('span[data-hours]');
const dataDaysTimer = document.querySelector('span[data-days]');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    
      let currentTime = Date.now();
            
            let deltaTime = selectedDates[0] - currentTime;

            if (deltaTime < 0) {
              window.alert("Please choose a date in the future");
              return
            }
    
    const timer = {
      start() {
   
          setInterval(() => {
       
             currentTime = Date.now();
            
             deltaTime = selectedDates[0] - currentTime;

            updateClockFace();
          
              
            function updateClockFace() {
              const { days, hours, minutes, seconds } = convertMs(deltaTime);
              dataSecondsTimer.innerHTML = `${seconds}`;
              dataMinutesTimer.innerHTML = `${minutes}`;
              dataHoursTimer.innerHTML = `${hours}`;
              dataDaysTimer.innerHTML = `${days}`;
            }
          }, 1000);
      }
    }
      buttonStartRef.addEventListener('click', timer.start);
  },
};

 const fp = flatpickr(inputRef, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


