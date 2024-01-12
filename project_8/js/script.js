const cSpanTitle = document.querySelector(".C");
const fSpanTitle = document.querySelector(".F");
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
};

changeBtn.addEventListener("click", changeBtnClick);
