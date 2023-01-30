import likePost from "./Likepost.js";
import fetchComment from "./commentFetch.js";
import postComments from "./postComment.js";
import deletepost from "./deletePost.js";
function Card(data, url) {
  let posts = document.querySelector(".posts");
  posts.innerHTML = "";
  data.forEach((post) => {
    /**Post id */
    const curr_postid = {
      postid: post["postid"],
    };

    let card = document.createElement("div");
    card.classList.add("card");

    /*UserName and Icon*/
    let user = document.createElement("div");
    user.classList.add("user");

    let userNameSec = document.createElement("div");
    userNameSec.classList.add("user_desc");
    let userIcon = document.createElement("i");
    userIcon.classList.add("icon");
    userIcon.classList.add("fa-regular");
    userIcon.classList.add("fa-user");

    let userName = document.createElement("p");
    userName.innerHTML = post["name"];

    userNameSec.appendChild(userIcon);
    userNameSec.appendChild(userName);

    let postTrash = document.createElement("i");
    postTrash.classList.add("icon");
    postTrash.classList.add("trash");
    postTrash.classList.add("fa-solid");
    postTrash.classList.add("fa-trash");

    user.appendChild(userNameSec);
    if (localStorage.getItem("name") == post["name"]) {
      user.appendChild(postTrash);
    }
    postTrash.addEventListener("click", () => {
      deletepost(url, curr_postid);
    });

    /*Image of Post*/
    let postImg = document.createElement("img");
    postImg.setAttribute("src", post["image"]);

    /*like and comment*/
    let features = document.createElement("div");
    features.classList.add("reactions");

    let like = document.createElement("i");
    like.classList.add("fa-solid");
    like.classList.add("fa-heart");
    like.classList.add("like");
    like.classList.add("icon");

    let commentBtn = document.createElement("i");
    commentBtn.classList.add("fa-regular");
    commentBtn.classList.add("fa-comment");
    commentBtn.classList.add("icon");
    commentBtn.classList.add("comment");

    let likeCount = document.createElement("p");
    likeCount.innerHTML = "likes: " + post["no_of_likes"];

    /**Liking post Funtions */
    like.addEventListener("click", () => {
      likePost(url, likeCount, curr_postid);
    });

    features.appendChild(like);
    features.appendChild(commentBtn);
    features.appendChild(likeCount);

    user.appendChild(features);

    /*Post Description*/
    let postDescription = document.createElement("div");
    postDescription.classList.add("post_Description");

    let desc = document.createElement("p");
    desc.innerHTML = post["msg"];
    postDescription.appendChild(desc);
    user.appendChild(postDescription);

    /*Comment Section */
    let commentBox = document.createElement("div");
    commentBox.classList.add("comments");

    let com_desc = document.createElement("div");
    com_desc.setAttribute("id", "com_desc");
    /**Individual Comments are fetched for each post */
    commentBox.appendChild(com_desc);
    commentBtn.addEventListener("click", () => {
      fetchComment(url, com_desc, curr_postid);
    });

    /**PostComment */

    let postComment = document.createElement("form");
    postComment.setAttribute("id", "postcomment");
    let inpComment = document.createElement("input");
    inpComment.setAttribute("type", "text");
    inpComment.setAttribute("placeholder", "Add comment");
    inpComment.setAttribute("id", "inputcomment");

    let subCommit = document.createElement("input");
    subCommit.setAttribute("type", "submit");
    subCommit.setAttribute("value", "Post");
    subCommit.setAttribute("class", "sub_comment");
    postComment.appendChild(inpComment);
    postComment.appendChild(subCommit);

    postComment.addEventListener("submit", (e) => {
      e.preventDefault();
      const commentEntered = {
        postid: post["postid"],
        msg: inpComment.value,
      };
      postComments(url, commentEntered, com_desc, curr_postid);
    });

    commentBox.appendChild(postComment);

    card.appendChild(user);
    card.appendChild(postImg);
    card.appendChild(features);
    card.appendChild(postDescription);
    card.appendChild(commentBox);
    posts.appendChild(card);
  });
}

export default Card;
