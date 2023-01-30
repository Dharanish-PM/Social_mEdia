import Fetch from "./fetch.js";
import fetchPosts from "./fetchPosts.js";
function deletepost(url, curr_postid) {
  const d = Fetch(url, "/deletepost", curr_postid);
  d.then((data) => {
    if (data["status"] == "Success") {
      fetchPosts(url);
      location.reload();
    }
  });
}
export default deletepost;
