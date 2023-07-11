let form = document.querySelector("#formControl");
form.addEventListener("submit", searchCity);
function weatherDisplay(response) {
  let cityInput = document.querySelector("#city");
  cityInput.innerHTML = response.data.name;
  console.log(response.data);
  let description = document.querySelector("#descript");
  description.innerHTML = response.data.weather[0].description;
  let unitConversion = document.querySelector("#temps");
  unitConversion.innerHTML = Math.round(response.data.main.temp);
  let windConversion = document.querySelector("#wind");
  windConversion.innerHTML = Math.round(response.data.wind.speed * 3.6);
  let humidityConversion = document.querySelector("#humidity");
  humidityConversion.innerHTML = Math.round(response.data.main.humidity);
  let weatherIcon = document.querySelector("#weatherImg");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let dateConversion = document.querySelector("#date");
  dateConversion.innerHTML = dateTime(response.data.dt * 1000);
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "5ec378af668e4e5ca5b63a514661a894";
  let city = document.querySelector("#city_input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherDisplay);
}

function dateTime(cityDateTime) {
  let Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(cityDateTime);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let day = Days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}
/*
function degreeFahrenheit(event) {
  event.preventDefault();
  let fahrenheitConversion = document.querySelector("#temps");

  let fahrenheitTemp = (unitConversion * 9) / 5 + 32;
  fahrenheitConversion.innerHTML = Math.round(fahrenheitTemp);
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", degreeFahrenheit);

let unitConversion = null;
*/
