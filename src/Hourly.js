import React, { useState, useEffect } from "react";
import "./css/hourly.css";
import axios from 'axios';
import HourlyForecastContent from './HourlyForecastContent';

export default function Hourly(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);


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
        <div className="hourly-block">
          <HourlyForecastContent forecast={forecast[1]} />
          <HourlyForecastContent forecast={forecast[3]} />
          <HourlyForecastContent forecast={forecast[5]} />
          <HourlyForecastContent forecast={forecast[7]} />
          <HourlyForecastContent forecast={forecast[9]} />
        </div>
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
