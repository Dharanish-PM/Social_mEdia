
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
var form1 = document.querySelector('#logform');
var form2 = document.querySelector('.sign');
form1.addEventListener('submit', (e) => {
    e.preventDefault();//autosubmission suppress
        const inputs = form1.elements;
        
    const data = {
        "email": inputs["curremail"].value,
        "password": inputs["password"].value
       
        }
        console.log(1);
   
    fetch('http://192.168.236.5:5000/login', {
    
        method: 'POST', // or 'PUT'
        headers: {     
            'Accept': 'application/json,,text/plain,*/*',
            'Content-Type': 'application/json'      
        },
        body: JSON.stringify(data)
   
    }).then((response) => response.json())
        .then((data) => {
            console.log(data["token"])
            localStorage.setItem("token", data["token"])
            if (data['status'] == 'Success') {
                
                window.location.href = "/home.html"
                
            }
        })
        .catch((error) => {
             console.dir('Error:', error);
        });

     
    
})
login.addEventListener('click', () => {
    console.log(3);
    login.classList.remove("ac");
    signup.classList.add("ac");
    
     form1.classList.remove("disable");
    form2.classList.add("disable");
})
signup.addEventListener('click', () => {
    signup.classList.remove("ac");
    login.classList.add("ac");
    form1.classList.add("disable");
    form2.classList.remove("disable");

    form2.addEventListener('submit', (e) => {
    e.preventDefault();//autosubmission suppress
    const inputs = form2.elements;
    const data = {
        "username": inputs["newusername"].value,
        "password": inputs["newpassword"].value,
        "email":inputs["email"].value
    }
   
 
   
    fetch('http://192.168.236.5:5000/signup', {
    
        method: 'POST', // or 'PUT'
        headers: {     
            'Accept': 'application/json,,text/plain,*/*',
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(data)
   
    }).then((response) => response.json())
        .then((data) => {
              console.log( data); 
        })
        .catch((error) => {
             console.dir('Error:', error);
        });   
})  
})







 









