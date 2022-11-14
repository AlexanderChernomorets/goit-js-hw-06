const inputEl = document.querySelector('#validation-input');
const validValue = 6;





// inputEl.addEventListener('focus', () => {
//     inputEl.style.border = '2px, solid, gray';

// } )
// const inpNumber = event.currentTarget.value.length;
inputEl.addEventListener('blur', (event) => {
    const inpNumber = event.currentTarget.value.length;
    console.log(inpNumber);
    if(inpNumber < validValue) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.replace('invalid', 'valid')
        // inputEl.style.borderColor = 'green'; 
    }

    // inputEl.style.borderColor = 'red';
})
// inputEl.addEventListener("input", (event) => {
    
//     console.log(inpNumber);
// })