const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
var form1 = document.querySelector("#logform");
var form2 = document.querySelector(".sign");
const url = "http://192.168.86.111:5000";
form1.addEventListener("submit", (e) => {
  e.preventDefault(); //autosubmission suppress
  const inputs = form1.elements;

  const data = {
    email: inputs["curremail"].value,
    password: inputs["password"].value,
  };

  fetch(url + "/login", {
    method: "POST", // or 'PUT'
    headers: {
      Accept: "application/json,,text/plain,*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data["token"]);
      localStorage.setItem("token", data["token"]);
      localStorage.setItem("name", data["name"]);
      if (data["status"] == "Success") {
        //add login successful
        window.location.href = "/home.html";
      } else {
        //no user exists
        document.querySelector(".error").classList.remove("disable");
        document.querySelector(".error").innerHTML = data["status"];
      }
    })
    .catch((error) => {
      console.dir("Error:", error);
    });
});
login.addEventListener("click", () => {
  login.classList.remove("ac");
  signup.classList.add("ac");

  form1.classList.remove("disable");
  form2.classList.add("disable");
});
signup.addEventListener("click", () => {
  signup.classList.remove("ac");
  login.classList.add("ac");
  form1.classList.add("disable");
  form2.classList.remove("disable");

  form2.addEventListener("submit", (e) => {
    e.preventDefault(); //autosubmission suppress
    const inputs = form2.elements;
    const data = {
      name: inputs["newusername"].value,
      password: inputs["newpassword"].value,
      email: inputs["email"].value,
    };
    console.log(data);

    fetch(url + "/signup", {
      method: "POST", // or 'PUT'
      headers: {
        Accept: "application/json,,text/plain,*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.dir("Error:", error);
      });

    alert("Signup is successful Please login");
    window.location.href = "/index.html";
  });
});

/*
function checkpassword() {
    var pass = document.querySelector("#newpass").value;
    var cpass = document.querySelector("#confirmpass").value;

    var error = document.querySelector(".error");
    if (pass.length != 0) {
        if (pass == cpass) {
            error.innerHTML = "Password";
            alert(error.innerHTML);
        }
        else {
            console.log("false");
        }
    }
}
document.querySelector("#confirmpass").addEventListener('change', () => {
    checkpassword();
})*/
