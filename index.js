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
        document.querySelector(".email").style.display = "none";
    document.querySelector(".confirmpass").style.display = "none";
    
   

})
signup.addEventListener('click', () => {
    signup.classList.remove("ac");
    login.classList.add("ac");
    document.querySelector(".email").style.display = "block";
    document.querySelector(".confirmpass").style.display = "block";
    document.querySelector(".submit").innerHTML="SignUp"

  
    

})



