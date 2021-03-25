import React from "react";
import "./css/app.css";
import Daily from "./Daily.js";
import Hourly from "./Hourly.js";
import github from "./img/github-icon.png";
import Search from "./Search";

export default function App() {
  return (
    <div className="app">
      <div className="page-title">
        <h1>Weather App</h1>
      </div>
      <Search />
      <div className="main-body-container">
        <div className="top-container">
          <div className="column-1">
            <span className="city-name">London</span>
            <span className="today-description">Cloudy</span>
            <br />
            <span className="main-temp">17</span>
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
              src="/"
              alt="todays weather icon"
              className="today-weather-image"
            />
            <p className="weather-details">
              feels like &emsp; <span className="feels-like">20</span>°
              <br />
              wind speed &emsp; <span className="wind">4</span> km/h
              <br />
              humidity &emsp; <span className="humidity">33</span>%
            </p>
          </div>

          <div className="column-3">
            <div className="last-updated">Last updated: Friday 12:45</div>
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
}
