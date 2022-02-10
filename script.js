const btn = document.querySelector('.btn')
const alert = document.querySelector('.alert')
let email = document.getElementById("email").value;

console.log(email)
btn.addEventListener("click", () => {
    event.preventDefault();

    console.log(email);
    // if(){

    // }

    alert.innerHTML = email;
})

