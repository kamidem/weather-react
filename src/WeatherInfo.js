import React from 'react';
import Daily from "./Daily";
import Hourly from "./Hourly";
import FormatedDate from './FormatedDate';
import WeatherIcon from './WeatherIcon';

export default function WeatherInfo(props) {
  return ( <div className="main-body-container">
        <div className="top-container">
          <div className="column-1">
            <span className="city-name">{props.info.city}</span>
            <span className="today-description">{props.info.description}</span>
            <br />
            <span className="main-temp">{Math.round(props.info.temp)}</span>
            <a href="/" className="c-link active">
              °C
            </a>{" "}
            <span className="c-f-detail">|</span>{" "}
            <a href="/" className="f-link">
              °F
            </a>
          </div>

          <div className="column-2">
            <WeatherIcon code={props.info.icon} />
            <p className="weather-details">
              feels like &emsp; <span className="feels-like">{Math.round(props.info.feels)}</span>°
              <br />
              wind speed &emsp; <span className="wind">{Math.round(props.info.wind)}</span> km/h
              <br />
              humidity &emsp; <span className="humidity">{props.info.humidity}</span>%
            </p>
          </div>

          <div className="column-3">
            <FormatedDate date={props.info.date}/>
            <br />
            <Hourly />
          </div>
        </div>

        <div className="bottom-container">
          <Daily />
        </div>
      </div>)
};