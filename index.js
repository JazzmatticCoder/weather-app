// will change the city display and temperatures.
function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#current-city").innerHTML = response.data.name;
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
//change city
function search(cityName) {
  let apiKey = "5507ec29f7c100e7fa41ca4bbda9a31e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function enterCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-input").value;
  let input = document.querySelector("#search-input");
  search(cityName);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", enterCity);

search("New York");

//this is for changing date and time
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
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
let timeElement = document.querySelector("#current-time");
timeElement.innerHTML = `${day} ${date} , ${hours}:${minutes}`;

// bonus converting the number on Celsius to fahrenheit
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}
// formula above is to convert from celsius to fahrenheit
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

// begining the process of converting back to celsius
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 20;
}
