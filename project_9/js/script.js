let locationKey = document.querySelector("#location");
let title = document.querySelector("title");

const startProject = (event) => {
  starter.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";
};

document.body.addEventListener("keydown", startProject);
