import Fetch from "./fetch.js";

function likePost(url, likeCount, curr_postid) {
  let d = Fetch(url, "/like", curr_postid);
  d.then((data) => {
    if (data) {
      likeCount.innerHTML = data["no_of_likes"];
    } else {
      console.log("/like end point problem");
    }
  });
}
export default likePost;
