import React from "react";
import "./css/hourly.css";
import axios from 'axios';

export default function Hourly(props) {


  function handleResponse(response) {
    console.log(response);
  }

  let lon = props.coords.lon;
  let lat = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7&units=metric`;
  axios.get(apiUrl).then(handleResponse);


  return (
    <div>
      <div className="local-time-line">
        Local time <span className="local-time">12:47</span>
      </div>
      <div className="hourly-each">
        <span className="hourly-hour">16:00</span>
        <img src="#" alt="weather icon" className="hourly-image" />
        <span className="hourly-temp">17</span>°
      </div>
      <div className="hourly-each">
        <span className="hourly-hour">17:00</span>
        <img src="#" alt="weather icon" className="hourly-image" />
        <span className="hourly-temp">17</span>°
      </div>
      <div className="hourly-each">
        <span className="hourly-hour">18:00</span>
        <img src="#" alt="weather icon" className="hourly-image" />
        <span className="hourly-temp">16</span>°
      </div>
      <div className="hourly-each">
        <span className="hourly-hour">19:00</span>
        <img src="#" alt="weather icon" className="hourly-image" />
        <span className="hourly-temp">14</span>°
      </div>
    </div>
  );
}
