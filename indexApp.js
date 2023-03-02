let h3 = document.querySelector("h3");

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h3.innerHTML = `${day} ${hours}:${minutes}`;

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class ="row"> `;
  forecastHTML =
    forecastHTML +
    `
   <div class="col-2">
              <div class="weather-forecast-date">Monday</div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="clear"
                id="icon"
                class="float left"
                width="36"
              />
              <div class="weather-forecast-temperature">
                <span class="weather-forecast-temperature-max">24° </span>
                <span class="weather-forecast-temperature-min">8°</span>
              </div>
            </div>
 `;
  forecastHTML =
    forecastHTML +
    `
   <div class="col-2">
              <div class="weather-forecast-date">Monday</div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="clear"
                id="icon"
                class="float left"
                width="36"
              />
              <div class="weather-forecast-temperature">
                <span class="weather-forecast-temperature-max">24° </span>
                <span class="weather-forecast-temperature-min">8°</span>
              </div>
            </div>
 `;
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function displayWeatherCondition(response) {
  console.log(response.data);
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function searchCity(city) {
  let apiKey = "f5e814a04eddfab1740f07bf0328eee2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInputElement.value);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Cape Town");
displayForecast();
