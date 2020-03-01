import React from 'react';
import PropTypes from 'prop-types';

import './CityForm.scss';

class CityForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      city: '',
    };
  }

  handleCityChange(event) {
    this.setState({
      city: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!event.target.firstElementChild.value) return;

    const { updateWeather } = this.props;
    const { city } = this.state;
    updateWeather(city);
  }

  render() {
    const { city } = this.state;
    const { error } = this.props;

    return (
      <div className="city-form">
        {error ? (
          <small className="error">
            <i className="fas fa-exclamation-circle" />
            Invalid location!
          </small>
        ) : (
          ''
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="CHANGE LOCATION"
            value={city}
            onChange={this.handleCityChange}
          />
          <button type="submit">
            <i className="fas fa-check fa-lg" />
          </button>
        </form>
      </div>
    );
  }
}

CityForm.propTypes = {
  updateWeather: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default CityForm;
