
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const buttonStartRef = document.querySelector('button[data-start]');
const inputRef = document.querySelector('input[type="text"]');

// const timer = {
//     start() {
//         const startTime = Date.now();
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const timeComponents = convertMs(deltaTime);
//             console.log(timeComponents);
//             // console.log(currentTime - startTime);
//         }, 1000);
//     }
// }
// timer.start();


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      const timer = {
    start() {
        const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = selectedDates[0] - currentTime;
            const timeComponents = convertMs(deltaTime);
            console.log(timeComponents);
            // console.log(currentTime - startTime);
        }, 1000);
    }
}
timer.start();
  },
};

 const fp = flatpickr(inputRef, options);

buttonStartRef.addEventListener('click', onButtonClick);

function onButtonClick() {
  
  
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
