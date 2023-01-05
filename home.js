function like_post() {
   
   
     document.querySelector('.like').style.color='red';
    console.log(1);
    
    
}

document.querySelector('.like').addEventListener("click",like_post);
console.log('Bearer '+localStorage.getItem("token"));

 fetch('http://192.168.236.5:5000/showpost', {
    
        method: 'POST', // or 'PUT'
     headers: {    
         'Authorization':'Bearer '+localStorage.getItem("token"),
            'Accept': 'application/json,,text/plain,*/*',
            'Content-Type': 'application/json'      
        },
        body: ""
   
    }).then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
             console.dir('Error:', error);
        });
