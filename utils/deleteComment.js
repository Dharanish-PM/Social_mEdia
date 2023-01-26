import Fetch from "./fetch.js";
import commentFetch from "./commentFetch.js";
function deletecomment(url, com_desc, curr_postid, commentid) {
  const d = Fetch(url, "/deletecomment", commentid);
  d.then((data) => {
    if (data["status"] == "Success") {
      com_desc.innerHTML = "";
      commentFetch(url, com_desc, curr_postid);
    } else {
      console.log("Deleting comment : " + data);
    }
  });
}
export default deletecomment;
