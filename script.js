const btn = document.querySelector('.btn')
const alert = document.querySelector('.alert')
const email = document.querySelector(".email")



btn.addEventListener('click', () => {
    event.preventDefault();
    
    const emailValue = email.value;
   

    function isValid (emailTest) {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(emailTest);
    };


    if(isValid(emailValue)){
        alert.innerText ='';
        email.classList.remove('invalid')
    } else{
        alert.innerText = 'Please provide a valid email';
        email.classList.add('invalid')
    }

    
})
