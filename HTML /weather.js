async function getWeather() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current_weather=true"
  );
  const data = await res.json();

  document.getElementById("temp").innerText =
    data.current_weather.temperature + " °C";

  document.getElementById("wind").innerText =
    "Wind: " + data.current_weather.windspeed + " km/h";
}

getWeather();