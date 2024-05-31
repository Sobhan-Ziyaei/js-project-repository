const cSpanTitle = document.querySelector(".C");
const fSpanTitle = document.querySelector(".F");
const resultText = document.querySelector(".result");
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

const convertBtnClick = () => {
  let valueInput;

  if (mainInput.value === "") {
    resultText.innerHTML = "Please Enter the value";
  } else {
    valueInput = mainInput.value;
    if (mainInput.getAttribute("placeholder") === "°C") {
      fDegreeResult = (valueInput * 9) / 5 + 32;
      resultText.innerHTML = `The fahrenheit degree is ${fDegreeResult.toFixed(2)}`;
    } else {
      cDegreeResult = ((valueInput - 32) * 5) / 9;
      resultText.innerHTML = `The centigrade degree is ${cDegreeResult.toFixed(2)}`;
    }
  }
};

const resetBtnClick = () => {
  resultText.innerHTML = "";

  mainInput.value === ""
    ? (resultText.innerHTML = "Do not input empty value")
    : (mainInput.value = "");
};

resetBtn.addEventListener("click", resetBtnClick);
convertBtn.addEventListener("click", convertBtnClick);
changeBtn.addEventListener("click", changeBtnClick);
