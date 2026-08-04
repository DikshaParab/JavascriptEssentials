function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'a07516ec558bb01370f3fab961d92eb9';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.log(error);
            document.getElementById('weatherInfo').innerHTML =
                `<p>City not found or API error</p>`;
        });
}

document
    .getElementById('weatherForm')
    .addEventListener('submit', showweatherDetails);