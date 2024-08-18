const apiKay = "6ac89714615ef20aa902ca38d877f8b7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search__wrap input');
const searchBtn = document.querySelector('.search__wrap button');
const weatherIcon = document.querySelector('.weather__icon');



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKay}`);

    if (response.status === 404) {
        document.querySelector('.error__message').style.display = 'block';
        document.querySelector('.weather__info').style.display = 'none';
    } else {
        let data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main === "Haze") {
            weatherIcon.className = 'fa-solid fa-cloud';
        } else if (data.weather[0].main === "Clouds") {
            weatherIcon.className = 'fas fa-cloud-sun';
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.className = 'fas fa-sun';
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.className = 'fas fa-cloud-showers-heavy';
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.className = 'fas fa-cloud-sun-rain';
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.className = 'fa-solid fa-cloud-showers-water';
        }

        document.querySelector('.weather__info').style.display = 'block';
        document.querySelector('.error__message').style.display = 'none';
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})