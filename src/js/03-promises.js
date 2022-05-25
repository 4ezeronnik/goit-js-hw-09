const formRef = document.querySelector('form');

const STORAGE_KEY = 'feedback-form-state';

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
    console.log(localStorage.getItem(STORAGE_KEY));
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
 
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


