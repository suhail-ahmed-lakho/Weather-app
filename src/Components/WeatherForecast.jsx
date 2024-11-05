import React from 'react';

const WeatherForecast = ({ forecast, unit, convertTemperature }) => {
  return (
    <div className="weather-forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-list">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <p>{day.day}</p>
            <p>{convertTemperature(day.temperature)}°{unit}</p>
            <p>{day.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;