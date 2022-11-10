const form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let passwordOne = document.getElementById('password1')
let passwordTwo = document.getElementById('password2')
let btn = document.getElementById('btn')


function showError(input, message) {
    const formControl = input.parentElement
    formControl.classList.add('error')
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input) {
    input.parentElement.classList.add('success')
}


form.addEventListener('submit',(e) => {
    e.preventDefault()

   if (username.value === '') {
    showError(username, 'Username is required')
   } else if (username.value.length < 3) {
    showError(username, 'Username require atleast 3 characters')
   } else {
    showSuccess(username)
   }

   if (email.value === '') {
    showError(email, 'Email is required')
   } else {
    showSuccess(email)
   }

   if (passwordOne.value === '') {
    showError(passwordOne, 'Password is required')
   } else if(passwordOne.value.length < 6) {
    showError(passwordOne, 'Password require atleast 6 character')
   } else {
    showSuccess(passwordOne)
   }

   if (passwordTwo.value === '') {
    showError(passwordTwo, 'Password is required')
   } else if(passwordOne.value != passwordTwo.value) { 
    showError(passwordTwo, 'Not match')
   }
    else {
    showSuccess(passwordTwo)
   }
})
