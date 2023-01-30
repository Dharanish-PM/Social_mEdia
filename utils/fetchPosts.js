import Fetch from "./fetch.js";
import Card from "./Card.js";
function fetchPosts(url) {
  const data = Fetch(url, "/latestpost", "");
  data.then((d) => Card(d, url));
}
export default fetchPosts;
