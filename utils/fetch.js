const Fetch = async (url, endpoint, data) => {
  try {
    const res = await fetch(url + endpoint, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Accept: "application/json,text/plain,*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const returndata = await res.json();
    return returndata;
  } catch (err) {
    console.log(err);
  }
};
export default Fetch;
