const locationKey = document.querySelector("#location");
const title = document.querySelector("title");
const keyElement = document.getElementById("key");
const locationElement = document.getElementById("location");
const whichElement = document.getElementById("which");
const codeElement = document.getElementById("code");
const keyCodeElement = document.getElementById("keyCode");

const startProject = (event) => {
  console.log(event);
  event.preventDefault();
  starter.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";
  keyElement.innerHTML = event.key;
  locationElement.innerHTML = event.location;
  whichElement.innerHTML = event.which;
  codeElement.innerHTML = event.code;
  keyCodeElement.innerHTML = event.keyCode;
};

document.body.addEventListener("keydown", startProject);
