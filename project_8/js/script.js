const cSpanTitle = document.querySelector(".C");
const fSpanTitle = document.querySelector(".F");
const mainInput = document.getElementById("converter");
const convertBtn = document.querySelector(".convertButton");
const resetBtn = document.querySelector(".resetButton");
const changeBtn = document.querySelector(".changeButton");

const changeBtnClick = () => {
  cSpanTitle.innerHTML === "°C"
    ? (cSpanTitle.innerHTML = "°F")
    : (cSpanTitle.innerHTML = "°C");
  fSpanTitle.innerHTML === "°F"
    ? (fSpanTitle.innerHTML = "°C")
    : (fSpanTitle.innerHTML = "°F");

  mainInput.getAttribute("placeholder") === "°F"
    ? mainInput.setAttribute("placeholder", "°C")
    : mainInput.setAttribute("placeholder", "°F");

  document.title === "Project 8 °C to °F"
    ? (document.title = "Project 8 °F to °C")
    : (document.title = "Project 8 °C to °F");
};

changeBtn.addEventListener("click", changeBtnClick);
