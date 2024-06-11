import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = () => {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=a6fc7de15b9e44e299d52d2163bcfc03')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          setWeather(data);
        })
        .catch(error => {
          setError(error.toString());
        });
    };

    fetchWeather();
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      {error && <p className="error">Error: {error}</p>}
      {weather ? (
        <div className="weather">
          <h2>{weather.name}</h2>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}

export default App;
