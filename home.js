console.log('Bearer ' + localStorage.getItem("token"));
//create post
const postform = document.querySelector("#postform");
const infile = document.querySelector("#infile");

let base64String = "";
function imageUploaded() {
        var file = document.querySelector(
            'input[type=file]')['files'][0];
     
        var reader = new FileReader();     
    reader.onload = function () {
        //console.log(reader.result);
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
        }
        reader.readAsDataURL(file);
    }

postform.addEventListener("submit", (e) => {
    e.preventDefault();
    imageUploaded();
    console.log(base64String);
    var obj = {
        "image": base64String,
        "msg":"Hy"
        
    };
    console.log("OBJECT");
    console.log(obj);

    fetch('http://10.140.16.100:5000/post', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
    }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.log(error)
       })
   
})

//fetch all posts
fetch('http://10.140.16.100:5000/showpost', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
    },
    body: ""
}).then((response) => response.json()).then((data) => {
    console.log(data);
    var output = ""
    data.forEach(post => {
        //parent node
        let card = document.createElement('div');
        card.classList.add('card');
        //user-section
        let user = document.createElement('div');
        user.classList.add('user')
        let user_img = document.createElement('i');
        user_img.classList.add('icon');
        user_img.classList.add('fa-regular');
        user_img.classList.add('fa-user');
        let para = document.createElement('p');
        para.innerHTML = post['postid']
        user.appendChild(user_img);
        user.appendChild(para);
        //post image
        let post_img = document.createElement('div');
        post_img.classList.add('post-img');
        let img = document.createElement('img');
        img.setAttribute('src', 'images/profilepic.jpg');
        img.setAttribute('height', '400');
        img.setAttribute('width', '450');
        post_img.appendChild(img);
        //like comment share
        let options = document.createElement('div');
        options.classList.add('post-like');
        let like = document.createElement('i');
        like.classList.add('like');
        like.classList.add('fa-solid');
        like.classList.add('fa-heart');
        let comment = document.createElement('i');
        comment.classList.add('comment');
        comment.classList.add('fa-regular');
        comment.classList.add('fa-comment');
        options.appendChild(like);
        options.appendChild(comment);
        let desc = document.createElement('div');
        desc.classList.add('desc');
        let pp = document.createElement('p');
        pp.innerHTML = "Title : " + post['title']
        let bb = document.createElement('p');
        bb.innerHTML = "Body : " + post['created_time'];
        desc.appendChild(pp);
        desc.appendChild(bb);
        card.appendChild(user);
        card.appendChild(post_img);
        card.appendChild(options);
        card.appendChild(desc);
        document.querySelector(".posts").appendChild(card);
        console.log("from post returns");
        const likes = {
            'postid': post['postid']
        }
        like.addEventListener('click', () => {
            fetch('http://10.140.16.100:5000/like', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Accept': 'application/json,text/plain,*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(likes)
            }).then((res) => res.json()).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.dir(error)
            });
        })
    });
}).catch((error) => {
    console.dir('Error:', error);
});