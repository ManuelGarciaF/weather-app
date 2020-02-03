import React from 'react';
import Axios from 'axios';

const API_KEY = '09c4d436f979cacc5cd4e3dd944cefb2';

async function fetchWeatherData(query) {
  const response = await Axios.get(
    `api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`,
  );
  const data = await response.json();
  console.log(data);
}

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button type="button" onClick={() => fetchWeatherData('Gualeguaychu,AR')}>
          asdfdas
        </button>
      </div>
    );
  }
}

export default App;
