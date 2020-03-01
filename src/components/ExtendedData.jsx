import React from 'react';
import PropTypes from 'prop-types';

import './ExtendedData.scss';

const ExtendedData = (props) => {
  const {
    location, description, pressure, humidity,
  } = props;

  return (
    <div className="extended-data">
      <div className="location">
        <i className="fas fa-map-marker-alt" />
        <span>{location}</span>
      </div>
      <div className="weather-description">{description}</div>
      <div className="pressure">
        <div className="label">PRESSURE</div>
        <div className="value">
          {pressure}
          hPa
        </div>
      </div>
      <div className="humidity">
        <div className="label">HUMIDITY</div>
        <div className="value">
          {humidity}
          %
        </div>
      </div>
    </div>
  );
};

ExtendedData.propTypes = {
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pressure: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
};

export default ExtendedData;
