import React from "react";
import "./css/daily.css";

export default function Daily() {
  return (
    <div>
      <div className="daily">
        <p>
          <span className="daily-weekday">Monday</span>
          <br />
          <span className="daily-date">24 March</span>
        </p>
        <p className="daily-temp">
          <span className="forecast-max">20</span>°<small>/</small>
          <span className="forecast-min">15</span>°
        </p>
        <img src="#" alt="weather icon" className="daily-image" />
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