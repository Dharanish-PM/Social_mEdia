function like_post() {
    let like = document.querySelector('#like');
   
    like.style.color='red';
    
    
}

document.getElementById('like').addEventListener("click",like_post);