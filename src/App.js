import React, { Component } from 'react';
import Titles from './titles';
import Form from './form';
import Weather from './weather';

const API_KEY = "7df6e7857b6dcb49c4c8d85a7886df91";

class App extends Component {

  state = {
    forecasts: [],
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();

      this.setState({
        forecasts: data.list,
        error: undefined
        // temperature: data.main.temp,
        // humidity: data.main.humidity,
        // description: data.weather[0].description,
        //list: data.list[]
      });
    } else {
      this.setState({
        forecasts: [],
        error: "Please enter the City/Country"
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          forecasts = {this.state.forecasts}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
