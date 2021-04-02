import React, { useState } from "react";
import "./css/hourly.css";
import axios from 'axios';
import HourlyForecastContent from './HourlyForecastContent';

export default function Hourly(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);


  function handleResponse(response) {
    setForecast(response.data.hourly);
    setLoaded(true);
  }


  if (loaded) {
    return (
      <div>
        <div className="local-time-line">
          Local time <span className="local-time">12:47</span>
        </div>
        <HourlyForecastContent forecast={forecast[1]} />

      </div>
    );
  } else {
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=ecc7fef62a02dbb22a9dbe2d8e3727b7&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;

  }



}
