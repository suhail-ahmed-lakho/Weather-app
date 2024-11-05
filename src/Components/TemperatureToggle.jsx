import React from 'react';
import './TemperatureToggle.css';

const TemperatureToggle = ({ unit, onUnitToggle }) => {
  return (
    <div className="temperature-toggle">
      <div className="toggle-container">
        <span className={`unit-label ${unit === 'C' ? 'active' : ''}`}>°C</span>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={unit === 'F'}
            onChange={onUnitToggle}
          />
          <span className="slider">
            <span className="toggle-thumb"></span>
          </span>
        </label>
        <span className={`unit-label ${unit === 'F' ? 'active' : ''}`}>°F</span>
      </div>
    </div>
  );
};

export default TemperatureToggle; 