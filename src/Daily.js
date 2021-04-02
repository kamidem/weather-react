import React from "react";
import "./css/daily.css";
import WeatherIcon from './WeatherIcon';
import axios from 'axios';

export default function Daily(props) {

  function handleResponse(response) {
    console.log(response);
  }

  let lon = props.coords.lon;
  let lat = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <div className="daily">
        <p>
          <span className="daily-weekday">Monday</span>
          <br />
          <span className="daily-date">24 March</span>
        </p>
        <p className="daily-temp">
          <span className="forecast-max">20</span>°
          <span className="forecast-min"> 15</span>°
        </p>
        <WeatherIcon code='01d' size={55} />
      </div>
      <div className="daily">
        <p>
          <span className="daily-weekday">Tuesday</span>
          <br />
          <span className="daily-date">25 March</span>
        </p>
        <p className="daily-temp">
          <span className="forecast-max">20</span>°<small>/</small>
          <span className="forecast-min">15</span>°
        </p>
        <img src="#" alt="weather icon" className="daily-image" />
      </div>
      <div className="daily">
        <p>
          <span className="daily-weekday">Wednesday</span>
          <br />
          <span className="daily-date">26 March</span>
        </p>
        <p className="daily-temp">
          <span className="forecast-max">20</span>°<small>/</small>
          <span className="forecast-min">15</span>°
        </p>
        <img src="#" alt="weather icon" className="daily-image" />
      </div>
      <div className="daily">
        <p>
          <span className="daily-weekday">Thursday</span>
          <br />
          <span className="daily-date">27 March</span>
        </p>
        <p className="daily-temp">
          <span className="forecast-max">20</span>°<small>/</small>
          <span className="forecast-min">15</span>°
        </p>
        <img src="#" alt="weather icon" className="daily-image" />
      </div>
      <div className="daily">
        <p>
          <span className="daily-weekday">Friday</span>
          <br />
          <span className="daily-date">28 March</span>
        </p>
        <p className="daily-temp">
          <span className="forecast-max">20</span>°<small>/</small>
          <span className="forecast-min">15</span>°
        </p>
        <img src="#" alt="weather icon" className="daily-image" />
      </div>
    </div>
  );
}
