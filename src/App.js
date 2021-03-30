import React, {useState} from "react";
import "./css/app.css";
import Daily from "./Daily.js";
import Hourly from "./Hourly.js";
import github from "./img/github-icon.png";
import Search from "./Search";
import FormatedDate from './FormatedDate.js';
import axios from 'axios';

export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false)

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: 'http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png',
      city: response.data.name
    });
    
    setLoaded(true);
  }

  


  if(weatherData.ready) {
  return (
    <div className="app">
      <div className="page-title">
        <h1>Weather App</h1>
      </div>
      <Search />
      <div className="main-body-container">
        <div className="top-container">
          <div className="column-1">
            <span className="city-name">{weatherData.city}</span>
            <span className="today-description">{weatherData.description}</span>
            <br />
            <span className="main-temp">{Math.round(weatherData.temp)}</span>
            <a href="/" className="c-link active">
              °C
            </a>{" "}
            <span className="c-f-detail">|</span>{" "}
            <a href="/" className="f-link">
              °F
            </a>
          </div>

          <div className="column-2">
            <img
              src={weatherData.icon}
              alt="todays weather icon"
              className="today-weather-image"
            />
            <p className="weather-details">
              feels like &emsp; <span className="feels-like">{Math.round(weatherData.feels)}</span>°
              <br />
              wind speed &emsp; <span className="wind">{Math.round(weatherData.wind)}</span> km/h
              <br />
              humidity &emsp; <span className="humidity">{weatherData.humidity}</span>%
            </p>
          </div>

          <div className="column-3">
            <FormatedDate date={weatherData.date}/>
            <br />
            <Hourly />
          </div>
        </div>

        <div className="bottom-container">
          <Daily />
        </div>
      </div>
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
    let city = 'London';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7`;
    axios.get(apiUrl).then(handleResponse);

    return 'Loading...';
  }
}
