import { useState } from 'react';
import './Weather.css';
import { FaWind } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import { WiHumidity } from 'react-icons/wi';

const Weather = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();
    const [error, setError] = useState('');

    const API_KEY = "aaf13230455b71c07a445d8e2d2b504c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    function handleOnChange(event) {
        setCity(event.target.value);
    }

    async function fetchData() {
        try {
            let response = await fetch(url);
            let output = await response.json();
            if (response.ok) {
                setWeather(output);
                console.log(output);
                setError('');
            } else {
                setError('No data found. Please enter a valid city name.');
            }
        } catch (error) {
            setError('An error occurred while fetching the data. Please try again.');
            console.error('Fetch error:', error);
        }
    }

    return (
        <div className='container'>
            <div className='city'>
                <input type='text' value={city} onChange={handleOnChange} placeholder='Enter any city name'></input>
                <button onClick={() => fetchData()}>
                    Enter
                </button>
            </div>

            {error && <p className='error-message'>{error}</p>}

            {weather && weather.weather && (
                <div className='content'>
                    <div className='weather-temp'>
                        <h2>{weather.main.temp}<span>&deg;C</span></h2>
                    </div>
                    <span className='humidity'>
                        <span className='humidity-icon'>
                            <WiHumidity></WiHumidity>
                        </span>
                        <h3 className='humidity-percent'>
                            {weather.main.humidity}<span>% , </span>
                        </h3>
                        <h3 className='humidity-heading'>Humidity</h3>
                    </span>

                    <div className='weather-city'>
                        <div className='location'>
                            <MdLocationOn></MdLocationOn>
                        </div>
                        <p>{weather.name},<span>{weather.sys.country}</span></p>
                    </div>

                    <div className='weather-stats'>
                        <div className='wind'>
                            <div className='wind-icon'>
                                <FaWind></FaWind>
                            </div>
                        </div>
                        <div className='weather-info'>
                            <h3 className='wind-speed'>{weather.wind.speed}<span>Km/h</span></h3>
                            <h3 className='wind-heading'>Wind Speed</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Weather;