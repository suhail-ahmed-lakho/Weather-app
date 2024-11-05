import React from 'react';

const CurrentWeather = ({ data, unit, convertTemperature }) => {
  return (
    <div className="current-weather">
      <h2>Current Weather in {data.city}</h2>
      <p>Temperature: {convertTemperature(data.temperature)}°{unit}</p>
      <p>Condition: {data.condition}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} m/s</p>
    </div>
  );
};

export default CurrentWeather;