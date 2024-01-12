const countrySelectBox = document.querySelector(".countrySelect");
const citySelectBox = document.querySelector(".citySelect");

const citiesData = {
  Iran: ["Tehran", "Tabriz", "Shiraz", "Mashhad", "Yazd"],
  Turkey: ["Istanbul", "Ankara", "Ezmir", "Antalia"],
  US: ["NewYork", "Chicago", "San Diego"],
};
const countrySelectBoxChange = () => {
  let countrySelectBoxValue = countrySelectBox.value;
  let countryCities = citiesData[countrySelectBoxValue];
  citySelectBox.innerHTML = "";

  if (countrySelectBox.value === "Please Select") {
    citySelectBox.innerHTML = "<option>Select City...</option>";
  } else {
    countryCities.forEach((city) => {
      citySelectBox.innerHTML += `<option>${city}</option>`;
    });
  }
};

countrySelectBox.addEventListener("change", countrySelectBoxChange);
