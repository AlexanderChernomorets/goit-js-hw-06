const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();



   const formElements = event.currentTarget.elements;
   const mail = formElements.email.value;
   const pass = formElements.password.value;
   const formData = {
    email: mail,
    password: pass,
   }

   if(mail.length <= 0 || pass.length <= 0){
    // console.log(mail.length, pass.length);
    alert('Заповніть порожні поля');
    
   }
   
   console.log(formData);
  
   formEl.reset()
}
