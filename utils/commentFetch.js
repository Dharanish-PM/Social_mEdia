import Fetch from "./fetch.js";
import deleteComment from "./deleteComment.js";
function commentFetch(url, com_desc, curr_postid) {
  const d = Fetch(url, "/showcomment", curr_postid);
  d.then((data) => {
    /**Fetching individual comments of a post */
    data.forEach((comment) => {
      // comment["name"];
      // comment["msg"];
      console.log(comment);

      let individualComment = document.createElement("div");
      individualComment.classList.add("individual_comment");

      let UsrLabel = document.createElement("p");
      UsrLabel.innerHTML = comment["name"];
      let UsrComment = document.createElement("p");
      UsrComment.classList.add("usercomment");
      UsrComment.innerHTML = comment["msg"];
      let CommentTrash = document.createElement("i");
      CommentTrash.classList.add("icon");
      CommentTrash.classList.add("trash");
      CommentTrash.classList.add("fa-solid");
      CommentTrash.classList.add("fa-trash");
      CommentTrash.classList.add("comtrash");

      individualComment.appendChild(UsrLabel);
      individualComment.appendChild(UsrComment);
      if (localStorage.getItem("name") == comment["name"]) {
        individualComment.appendChild(CommentTrash);
      }

      const commentId = {
        commentid: comment["commentid"],
      };

      CommentTrash.addEventListener("click", () => {
        deleteComment(url, com_desc, curr_postid, commentId);
      });

      com_desc.appendChild(individualComment);
    });
  });
}
export default commentFetch;
