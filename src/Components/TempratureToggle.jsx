import React from 'react';

const TemperatureToggle = ({ unit, onUnitToggle }) => {
  return (
    <div className="temperature-toggle">
      <button onClick={onUnitToggle}>
        Switch to °{unit === 'C' ? 'F' : 'C'}
      </button>
    </div>
  );
};

export default TemperatureToggle;