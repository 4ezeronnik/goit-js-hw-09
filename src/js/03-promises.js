const formRef = document.querySelector('form');

const STORAGE_KEY = 'feedback-form-state';

let amount = 1;

formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
   const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
   
    formData[evt.target.name] = evt.target.value;
     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const checkedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || '';
  if (!checkedData.delay || !checkedData.step || !checkedData.amount)  {  
        return
  }
  const delayData = Number(checkedData.delay);
  const stepData = Number(checkedData.step);
  const amountData = Number(checkedData.amount);



    console.log(localStorage.getItem(STORAGE_KEY));
    evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);

 
 for (let amount = 0; amount < amountData; amount++)
  createPromise(amount + 1, delayData);
  
}


 
function createPromise(position, delay) {
    
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
    if (shouldResolve) {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
 
}
