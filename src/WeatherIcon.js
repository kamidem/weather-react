import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
  return (
  <ReactAnimatedWeather
    icon='CLEAR_DAY'
    color='goldenrod'
    size={100}
    animate={true}
  />
  );
}