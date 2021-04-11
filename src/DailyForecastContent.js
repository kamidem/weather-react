import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function DailyForecastContent(props) {

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = date.getDay();
    return days[day];
  }

  function date() {
    let date = new Date(props.forecast.dt * 1000);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = date.getMonth();
    let mDay = date.getDate();
    return `${mDay} ${months[month]}`;
  }

  return (
    <div className="daily">
      <p>
        <span className="daily-weekday">{day()}</span>
        <br />
        <span className="daily-date">{date()}</span>
      </p>
      <p className="daily-temp">
        <span className="forecast-max">{Math.round(props.forecast.temp.max)}°</span>
        <span className="forecast-min"> {Math.round(props.forecast.temp.min)}°</span>
      </p>
      <WeatherIcon code={props.forecast.weather[0].icon} size={55} />
    </div>
  )
}