
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

var form = document.querySelector('.log');
form.addEventListener('submit', (e) => {
    e.preventDefault();//autosubmission suppress
    const inputs = form.elements;
    const data = {
        "username": inputs["username"].value,
        "password": inputs["password"].value,
        "email":inputs["email"].value
    }
   
    console.log(data);
   
    fetch('http://10.140.16.52:5000/login', {
        mode: 'no-cors',
        method: 'POST', // or 'PUT'
        headers: {     
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
   
    }).then((response) => response.text())
      .then((data) => {
           console.log('Success:', data); 
        })
        .catch((error) => {
             console.dir('Error:', error);
        });
    
})