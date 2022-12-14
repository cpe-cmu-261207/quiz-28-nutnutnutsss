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

callApi();
if ((resp.data.results.gender = female)) {
  genderIcon.innerText = "👩";
} else {
  genderIcon.innerText = "👨";
}

loadingCard.style.display = "none";
imgProfile.src = resp.data.results.picture.large;
pName.innerText = `${resp.data.results.name.first} ${resp.data.results.name.last}`;
pAddress.innerText = `${resp.data.results.location.city} ${resp.data.results.location.state} ${resp.data.results.location.country} ${resp.data.results.location.postcode}`;
pEmail.innerText = resp.data.results.email;
