const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


function onFormInput (event) {
    console.log(event.currentTarget.value);

   
        outputEl.textContent = event.currentTarget.value;
    
    
        if(event.currentTarget.value === "") {
            outputEl.textContent = "Anonymous"
        }

    
}

inputEl.addEventListener('input', onFormInput);

