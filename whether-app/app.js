
const searchBtn = document.getElementById('btn');
const container = document.getElementById('weatherData');

const fetchWeather = () => {
    const city = document.getElementById('search').value;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '4e01a64bf86428da8738142e1a3d7ce5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('City not found!');
            return response.json();
        })
        .then(data => displayWeatherData(data))
        .catch(error => {
            container.innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
};

const displayWeatherData = (data) => {
    container.innerHTML = '';  // Clear old data

    const weatherDetails = [
        { label: 'City', value: `${data.name}, ${data.sys.country}` },
        { label: 'Temperature', value: `${data.main.temp}°C` },
        { label: 'Humidity', value: `${data.main.humidity}%` },
        { label: 'Min Temp', value: `${data.main.temp_min}°C` },
        { label: 'Max Temp', value: `${data.main.temp_max}°C` },
        { label: 'Wind Speed', value: `${data.wind.speed} m/s` },
        { label: 'Wind Direction', value: `${data.wind.deg}°` },
        { label: 'Sunrise', value: new Date(data.sys.sunrise * 1000).toLocaleTimeString() },
        { label: 'Sunset', value: new Date(data.sys.sunset * 1000).toLocaleTimeString() },
        { label: 'Weather', value: `${data.weather[0].description}` }
    ];

    weatherDetails.forEach(detail => {
        const item = document.createElement('div');
        item.className = 'weather-item';
        item.innerHTML = `<strong>${detail.label}:</strong> <span>${detail.value}</span>`;
        container.appendChild(item);
    });
};

searchBtn.addEventListener('click', fetchWeather);