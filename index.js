var username = "";
var password = "";

function myfun() {
    username = document.querySelector("#user");
    password = document.querySelector("#pass");
}

const login = document.querySelector(".login");
const signup = document.querySelector(".signup");

login.addEventListener('click', () => {
    login.classList.remove("ac");
    signup.classList.add("ac");
     document.querySelector(".email").classList.add('disable');
    document.querySelector(".confirmpass").classList.add('disable');
    document.querySelector(".submit").innerHTML = "Login";
})
signup.addEventListener('click', () => {
    signup.classList.remove("ac");
    login.classList.add("ac");
  
    document.querySelector(".email").classList.remove('disable');
    document.querySelector(".confirmpass").classList.remove('disable');
    document.querySelector(".submit").innerHTML = "SignUp";
})



