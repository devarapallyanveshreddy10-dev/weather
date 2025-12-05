let user_input = document.querySelector('input');
let btn = document.querySelector('button');
let icon = document.querySelector('.icon');
let weatherData = document.querySelector('.CityName');
let temperature = document.querySelector('.temp');
let description = document.querySelector('.description');

btn.addEventListener('click', () => {
    let city = user_input.value;
    getWeatherData(city);
});

const getWeatherData = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=351b4396d07f9d0a6cb5ee14f0d8553a&units=metric`);
    const data = await response.json();
    console.log(data);

    const weatherIcon = data.weather[0].icon;
    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="weather-image" />`;

    const cityName = data.name;
    const countryName = data.sys.country;
    weatherData.innerHTML = `${cityName}, ${countryName}`;

    const tempData = data.main.temp;
    temperature.innerHTML = `${tempData}°C`;

    const weatherDesc = data.weather[0].description;
    description.innerHTML = weatherDesc;
};
