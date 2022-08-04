const genderIcon = document.querySelector("#span-gender-icon");
const imgProfile = document.querySelector("#img-profile");
const pName = document.querySelector("#p-name");
const pAddress = document.querySelector("#p-address");
const pEmail = document.querySelector("#p-email");
const btnRandom = document.querySelector("#btn-random");
const loadingCard = document.querySelector("#div-loading-card");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

if ((resp.data.results.gender = female)) {
  genderIcon.innerText = "👩";
} else {
  genderIcon.innerText = "👨";
}
