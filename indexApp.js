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
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "9cb245c8974a9aa2bee9c6e33954b52a";
  let city = document.querySelector("#form-control").value;
  let apiUrl = `https://samples.openweathermap.org/data/2.5/weather?q=${city}appid=${apiKey}&units=metric`;
}
axios.get(`apiUrl`).then(`displayWeatherCondition`);
