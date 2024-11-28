const html = document.querySelector('html');
const cityName = document.querySelector('.city-name');
const blockOneImg = document.querySelector('.block-one__img');
const blockOneTemperature = document.querySelector('.block-one__temperature');
const blockTwoWind = document.querySelector('.block-two__wind');
const blockTwoHumidity = document.querySelector('.block-two__humidity');
const blockTwoPressure = document.querySelector('.block-two__pressure');

const citiesItem01 = document.querySelector('.cities__item-01');
const citiesItem02 = document.querySelector('.cities__item-02');
const citiesItem03 = document.querySelector('.cities__item-03');
const citiesItem04 = document.querySelector('.cities__item-04');
const citiesItem05 = document.querySelector('.cities__item-05');
const citiesItem06 = document.querySelector('.cities__item-06');


const date = new Date();
html.style.backgroundImage = backGrounds[date.getMonth()];

async function openWeather(url) {
    const data = await fetch(url);
    const result = await data.json();

    const temperature = result.main.temp;
    const icon = result.weather[0].icon; //Иконка
    const wind = result.wind.speed; //Ветер
    const humidity = result.main.humidity; //Влажность
    const pressure = result.main.pressure; //Давление

    blockOneTemperature.innerHTML = `${(temperature-273.15).toFixed(1)} &deg;C`
    blockOneImg.src = icons[icon];
    blockTwoWind.textContent = `Wind: ${wind} m/s`;
    blockTwoHumidity.textContent = `Humidity: ${humidity} %`;
    blockTwoPressure.textContent = `Pressure: ${pressure*0.75} mm Hg`
}

openWeather(urlCities.Minsk);

citiesItem01.addEventListener('click', (e) => {
    cityName.textContent = e.target.textContent;
    openWeather(urlCities[e.target.textContent]);
})


citiesItem02.addEventListener('click', (e) => {
    cityName.textContent = e.target.textContent;
    openWeather(urlCities[e.target.textContent]);
})

citiesItem03.addEventListener('click', (e) => {
    cityName.textContent = e.target.textContent;
    openWeather(urlCities[e.target.textContent]);
})

citiesItem04.addEventListener('click', (e) => {
    cityName.textContent = e.target.textContent;
    openWeather(urlCities[e.target.textContent]);
})

citiesItem05.addEventListener('click', (e) => {
    cityName.textContent = e.target.textContent;
    openWeather(urlCities[e.target.textContent]);
})

citiesItem06.addEventListener('click', (e) => {
    cityName.textContent = e.target.textContent;
    openWeather(urlCities[e.target.textContent]);
})