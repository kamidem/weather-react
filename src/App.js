import React, { useState } from "react";
import "./css/app.css";
import "./css/layout.css";
import github from "./img/github-icon.png";
import cursor from "./img/cursor.png";
import location from "./img/location.png";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./css/search.css";
import { FaReact } from "react-icons/fa";
export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("London");
  const [unit, setUnit] = useState("celsius");
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      coords: response.data.coord,
    });
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchLocation(position) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityName(event) {
    setCity(event.target.value);
  }
  function handlePosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  if (weatherData.ready) {
    return (
      <div className="app">
        <div className="page-title">
          <h1>
            <span>
              <FaReact />
            </span>
            React Weather App
          </h1>
        </div>
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <img
              src={location}
              className="location-search-icon"
              alt="location"
              width="15px"
            />
            <input
              type="search"
              autoComplete="off"
              placeholder="enter a city"
              className="city-input"
              onChange={handleCityName}
            />
            <button type="submit" className="search-button">
              SEARCH
            </button>
            <button
              type="button"
              className="my-location-button"
              title="find my location"
              onClick={handlePosition}
            >
              <img src={cursor} alt="find my location" />
            </button>
          </form>
        </div>
        <WeatherInfo info={weatherData} unit={unit} setUnit={setUnit} />
        <div className="code-by">
          <a href="https://github.com/kamidem/weather-react" target="blank">
            <img src={github} alt="github icon" className="github-icon" />
          </a>{" "}
          <a href="https://github.com/kamidem/weather-react" target="blank">
            Open-source code
          </a>
          , by Kamile Dementaviciute
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}