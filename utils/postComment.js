import Fetch from "./fetch.js";
import commentFetch from "./commentFetch.js";
function postComment(url, commentEntered, com_desc, curr_postid) {
  const d = Fetch(url, "/comment", commentEntered);
  d.then((data) => {
    if (data["status"] == "Success") {
      commentFetch(url, com_desc, curr_postid);
    } else {
      console.log("Posting comment problem!");
    }
  });
}
export default postComment;
