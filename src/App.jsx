import React from 'react';

import Header from './components/ImageHeader';
import CityForm from './components/CityForm';
import UnitControl from './components/UnitControl';
import ExtendedData from './components/ExtendedData';

import './App.scss';

const API_KEY = '09c4d436f979cacc5cd4e3dd944cefb2';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchWeatherData = this.fetchWeatherData.bind(this);
    this.updateWeather = this.updateWeather.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);

    this.state = {
      unit: 'metric',
      currentCity: 'New York, US',
      weather: '',
      description: '',
      temp: '',
      pressure: '',
      humidity: '',
      invalidLocation: false,
    };

    this.updateWeather('New York, US');
  }

  // componentDidUpdate() {
  //   console.table(this.state);
  // }

  updateWeather(city) {
    this.fetchWeatherData(city)
      .then((data) => {
        this.setState({
          currentCity: `${data.name}, ${data.sys.country}`,
          weather: data.weather[0].main,
          description: data.weather[0].description,
          temp: Math.floor(data.main.temp).toString(),
          pressure: data.main.pressure.toString(),
          humidity: data.main.humidity.toString(),
          invalidLocation: false,
        });
      })
      .catch(() => {
        this.setState({
          currentCity: '-',
          weather: '-',
          description: '-',
          temp: '-',
          pressure: '-',
          humidity: '-',
          invalidLocation: true,
        });
      });
  }

  async fetchWeatherData(query) {
    const { unit } = this.state;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${unit}`,
      { mode: 'cors' },
    );
    return response.json();
  }

  handleUnitChange(checked) {
    this.setState(
      {
        unit: checked ? 'imperial' : 'metric',
      },
      () => {
        const { currentCity } = this.state;
        this.updateWeather(currentCity);
      },
    );
  }

  render() {
    const {
      unit,
      currentCity,
      weather,
      description,
      temp,
      pressure,
      humidity,
      invalidLocation,
    } = this.state;

    return (
      <main>
        <div className="App">
          <Header unit={unit} temp={temp} weather={weather} />
          <ExtendedData
            location={currentCity}
            pressure={pressure}
            humidity={humidity}
            description={description}
          />
          <UnitControl checked={unit === 'imperial'} onChange={this.handleUnitChange} />
          <CityForm updateWeather={this.updateWeather} error={invalidLocation} />
          <small className="about">By Manuel Garcia. Data by openweathermap.org</small>
        </div>
      </main>
    );
  }
}

export default App;
