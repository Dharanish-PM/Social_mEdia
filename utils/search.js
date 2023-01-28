// import Fetch from "./fetch";
const searchwrapper = document.querySelector(".search-input");
const inputBox = searchwrapper.querySelector(".inpSearch");
const suggBox = searchwrapper.querySelector(".autocom-box");
function search(url) {
  /**Fetch data */
  const suggestions = ["Franklin", "Jerusha", "Dharanish", "DIwakar", "Sid"];
  //   const d = Fetch(url, "/userlist", "");
  //   d.then((data) => suggestions.push(data));
  inputBox.addEventListener("keyup", (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
      emptyArray = suggestions.filter((data) => {
        return data
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase());
      });
      emptyArray = emptyArray.map((ele) => {
        return `<li>` + ele + `</li>`;
      });
      console.log(emptyArray);
      searchwrapper.classList.add("active");
    } else {
      searchwrapper.classList.remove("active");
    }
    showsuggestions(emptyArray);
  });
  suggBox.addEventListener("click", (e) => {
    let clicked = e.target.textContent;
    inputBox.value = clicked;
    searchwrapper.classList.remove("active");
  });
}
function showsuggestions(list) {
  let listData;
  if (!list.length) {
    listData = `<li>${inputBox.value}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

export default search;
