import React from "react";
import cursor from './img/cursor.png';
import location from "./img/location.png";
import "./css/search.css";

export default function Search() {
  return (
    <div className="search-container">
      <form>
        <img
          src={location}
          className="location-search-icon"
          alt="location"
          width="15px"
        />
        <input
          type="search"
          autoComplete="off"
          placeholder="enter a city"
          className="city-input"
        />
        <button type="submit" className="search-button">
          SEARCH
        </button>
        <button
          type="submit"
          className="my-location-button"
          title="find my location"
        >
          <img src={cursor} alt="find my location" />
        </button>
      </form>
    </div>
  );
}
