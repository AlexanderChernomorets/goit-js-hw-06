const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit)

const data = {}

function onFormSubmit(evt) {
    evt.preventDefault()
    const {
        elements: { email, password },
    } = evt.currentTarget

    if(email.value === '' || password.value ===''){
        return alert('Заповніть порожні поля');
    }

    data[email.name] = email.value;
    data[password.name] = password.value;
    
    console.log(data);
    formEl.reset()
}

// ------------------------------

// formEl.addEventListener('submit', onFormSubmit)
// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     formData.forEach((value, name) => {
//         if(value.length === 0) {
//             
//             return
//         } else {
//             console.log('value:', value);
//             console.log('name:', name);
//             formEl.reset()
//         }
        
       
//     })

    // --------------------------------
//     formEl.addEventListener('submit', onFormSubmit)
//     function onFormSubmit(event) {
//         event.preventDefault();
    

//    const formElements = event.currentTarget.elements;
//    const mail = formElements.email.value;
//    const pass = formElements.password.value;
//    const formData = {
//     email: mail,
//     password: pass,
//    }
   

//    if(mail.length <= 0 || pass.length <= 0){
//     // console.log(mail.length, pass.length);
//     alert('Заповніть порожні поля');
//     return
    
//    }
   

//    console.log(formData); 
//    formEl.reset()
// }