const inputEl = document.querySelector('#validation-input');

const validValue = Number(inputEl.dataset.length);





// inputEl.addEventListener('focus', () => {
//     inputEl.style.border = '2px, solid, gray';

// } )
// const inpNumber = event.currentTarget.value.length;
inputEl.addEventListener('blur', (event) => {
    const inpNumber = event.currentTarget.value.length;
    console.log(inpNumber);
    if(inpNumber < validValue || inpNumber > validValue) {
        inputEl.classList.add('invalid');
    } else if(inpNumber === validValue) {
         inputEl.classList.replace('invalid', 'valid')
        // inputEl.style.borderColor = 'green'; 
    }

    // inputEl.style.borderColor = 'red';
})
// inputEl.addEventListener("input", (event) => {
    
//     console.log(inpNumber);
// })
