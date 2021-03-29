import React from "react";
import "./css/hourly.css";
//import axios from 'axios';

export default function Hourly() {
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
