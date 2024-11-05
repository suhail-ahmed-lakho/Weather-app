import React, { useState } from 'react';
import CitySearch from './CitySearch.jsx';
import CurrentWeather from './CurrentWeather.jsx';
import WeatherForecast from './WeatherForecast.jsx';
import TemperatureToggle from './TemperatureToggle.jsx';

// Dummy weather data
const dummyWeatherData = {
  current: {
    city: 'New York',
    temperature: 22,
    condition: 'Sunny',
    humidity: 60,
    windSpeed: 5,
  },
  forecast: [
    { day: 'Mon', temperature: 20, condition: 'Partly Cloudy' },
    { day: 'Tue', temperature: 22, condition: 'Sunny' },
    { day: 'Wed', temperature: 19, condition: 'Rainy' },
    { day: 'Thu', temperature: 18, condition: 'Cloudy' },
    { day: 'Fri', temperature: 23, condition: 'Sunny' },
  ],
};

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(dummyWeatherData);
  const [unit, setUnit] = useState('C');

  const handleCitySearch = (city) => {
    // In a real application, you would fetch data from an API here
    // For this example, we'll just update the city in the dummy data
    setWeatherData({
      ...weatherData,
      current: { ...weatherData.current, city: city },
    });
  };

  const handleUnitToggle = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  const convertTemperature = (temp) => {
    if (unit === 'F') {
      return Math.round((temp * 9) / 5 + 32);
    }
    return temp;
  };

  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      <CitySearch onCitySearch={handleCitySearch} />
      <TemperatureToggle unit={unit} onUnitToggle={handleUnitToggle} />
      <CurrentWeather
        data={weatherData.current}
        unit={unit}
        convertTemperature={convertTemperature}
      />
      <WeatherForecast
        forecast={weatherData.forecast}
        unit={unit}
        convertTemperature={convertTemperature}
      />
    </div>
  );
};

export default WeatherDashboard;