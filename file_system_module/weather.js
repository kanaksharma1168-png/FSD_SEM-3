const weatherData = {

    Ghaziabad: {
        temperature: 27,
        condition: "Mainly clear",
        icon: "🌤️",
        humidity: 45,
        wind: 11
    },

    Delhi: {
        temperature: 28,
        condition: "Sunny",
        icon: "☀️",
        humidity: 40,
        wind: 10
    },

    Mumbai: {
        temperature: 30,
        condition: "Partly cloudy",
        icon: "⛅",
        humidity: 70,
        wind: 15
    },

    Jaipur: {
        temperature: 29,
        condition: "Sunny",
        icon: "☀️",
        humidity: 35,
        wind: 12
    },

    Lucknow: {
        temperature: 26,
        condition: "Cloudy",
        icon: "☁️",
        humidity: 55,
        wind: 9
    }
};

const forecastData = [

    {
        day: "Fri",
        date: "20 Nov",
        icon: "☀️",
        condition: "Sunny",
        temp: "27° / 17°"
    },

    {
        day: "Sat",
        date: "21 Nov",
        icon: "🌤️",
        condition: "Partly cloudy",
        temp: "28° / 16°"
    },

    {
        day: "Sun",
        date: "22 Nov",
        icon: "⛅",
        condition: "Few clouds",
        temp: "27° / 18°"
    },

    {
        day: "Mon",
        date: "23 Nov",
        icon: "☁️",
        condition: "Cloudy",
        temp: "26° / 16°"
    },

    {
        day: "Tue",
        date: "24 Nov",
        icon: "☀️",
        condition: "Sunny",
        temp: "28° / 17°"
    }

];

function displayForecast() {

    const forecastContainer =
        document.getElementById("forecast");

    forecastContainer.innerHTML = "";

    forecastData.forEach(function(day) {

        const dayCard = document.createElement("div");

        dayCard.className = "day";

        dayCard.innerHTML = `

            <div class="day-name">
                ${day.day}, ${day.date}
            </div>

            <div class="day-icon">
                ${day.icon}
            </div>

            <div class="day-condition">
                ${day.condition}
            </div>

            <div class="day-temp">
                ${day.temp}
            </div>

        `;

        forecastContainer.appendChild(dayCard);

    });

}

function searchWeather() {

    const cityName = document
        .getElementById("cityInput")
        .value.trim();

    if (cityName === "") {
        alert("Please enter a city name");
        return;
    }

    const cityKey = Object.keys(weatherData).find(
        city => city.toLowerCase() === cityName.toLowerCase()
    );

    if (cityKey) {

        const data = weatherData[cityKey];

        document.getElementById("location").innerText =
            cityKey + ", India";

        document.getElementById("temperature").innerText =
            data.temperature + "°C";

        document.getElementById("condition").innerText =
            data.condition;

        document.getElementById("mainIcon").innerText =
            data.icon;

        document.getElementById("humidity").innerText =
            data.humidity + "%";

        document.getElementById("wind").innerText =
            data.wind + " km/h";

    } else {

        alert("City not available. Try Ghaziabad, Delhi, Mumbai, Jaipur or Lucknow.");

    }

}

document.getElementById("cityInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            searchWeather();
        }

    });

displayForecast();