const fetchData = async () => {
  const url = "https://reqres.in/api/users/2";
  const res = await fetch(url);
  const { data } = await res.json();
  console.log(data);
  document.querySelector("#name").innerHTML = data.first_name;
  document.querySelector("#avatar").src = data.avatar;
};
fetchData();
