import React from 'react';
import PropTypes from 'prop-types';

import './ImageHeader.scss';

import clearImage from '../img/clear.jpg';
import cloudsImage from '../img/clouds.jpg';
import mistImage from '../img/mist.jpg';
import rainImage from '../img/rain.jpg';
import snowImage from '../img/snow.jpg';
import thunderstormImage from '../img/thunderstorm.jpg';

const ImageHeader = (props) => {
  const { unit, temp, weather } = props;
  const images = {
    clear: clearImage,
    clouds: cloudsImage,
    mist: mistImage,
    rain: rainImage,
    snow: snowImage,
    thunderstorm: thunderstormImage,
  };

  // Show clouds image in case of invalid data.
  const shownWeather = weather === '-' ? 'clouds' : weather;

  return (
    <div className="image-header">
      <img src={images[shownWeather.toLowerCase()]} alt="Current Weather" />
      <div className="content">
        <div className="temperature">
          <span className="number">
            {temp}
            °
          </span>
          <span className="unit">{unit === 'metric' ? 'C' : 'F'}</span>
        </div>
        <div className="weather">{weather}</div>
      </div>
    </div>
  );
};

ImageHeader.propTypes = {
  unit: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
};

export default ImageHeader;
