function formatDate(timestamp) {
let = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes <10) {
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
let day = days[date.getDay()]; 
    return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    celsiusTemperature = response.data.main.temp;

    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Mathround.(response.data.wind.speed * 3.6);
    dateElement.innerHTML = formatDate(response.data.dt. * 1000);
    iconElement.setAttribute(
        "src",`https://oprnweathermap.org/img/wn/${response.data.weather.[0].icon}@2x.png`
    );
iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
    let apiKey = "2ff29bed3181c35cc5408037f85";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
}
