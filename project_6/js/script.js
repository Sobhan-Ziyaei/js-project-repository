const citiesData = {
  tehran: {
    city: "Tehran",
    temp: 12,
    weather: "sunny",
    humidity: 23,
    windSpeed: 32,
  },
  shiraz: {
    city: "Shiraz",
    temp: 9,
    weather: "windy",
    humidity: 12,
    windSpeed: 14,
  },
  tabriz: {
    city: "Tabriz",
    temp: 1,
    weather: "rainy",
    humidity: 43,
    windSpeed: 12,
  },
  mashhad: {
    city: "Mashhad",
    temp: 5,
    weather: "snowy",
    humidity: 7,
    windSpeed: 24,
  },
  esfahan: {
    city: "Esfahan",
    temp: 23,
    weather: "sunny",
    humidity: 15,
    windSpeed: 18,
  },
};

const searchBtn = document.getElementById("search");
const mainContent = document.querySelector(".weather");
const searchBar = document.querySelector(".search-bar");

const searchBtnClick = () => {
  let searchBarValue = searchBar.value;
  let cityData = citiesData[searchBarValue];
  console.log(cityData.windSpeed);
  document.querySelector(".city").innerHTML = `Weather in ${cityData.city}`;
  document.querySelector(".temp").innerHTML = `${cityData.temp} °C`;
  document.querySelector(".description").innerHTML = cityData.weather;
  document.querySelector(
    ".humidity"
  ).innerHTML = `Humidity : ${cityData.humidity}`;
  document.querySelector(
    ".wind"
  ).innerHTML = `Wind speed: ${cityData.windSpeed} km/h`;
  mainContent.classList.remove("loading");
};

searchBtn.addEventListener("click", searchBtnClick);
