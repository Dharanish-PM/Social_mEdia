var form=document.getElementById('form')

form.addEventListener('submit',function(event){
event.preventDefault()
var username=document.getElementById('username').value
console.log(username)
var password=document.getElementById('password').value
console.log(password)
var email=document.getElementById('email').value
console.log(email)
var number=document.getElementById('number').value
console.log(number)

})