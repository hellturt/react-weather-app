import React from 'react';

const Weather = (props) => {
  return(
    <div className="weather_container">
      {
        props.forecasts.map( (forecast, i) => {
        if(i === 1 || i === 9 || i === 17 || i === 25 || i === 33)
          return (
            <div key={i} className="single_weather">
              <div className="img_container">
                <img src={`./images/wi-${forecast.weather[0].main}.svg`} alt=""/>
                <h1>{forecast.weather[0].main}</h1>
              </div>
              <div className="detail_container">
                <p>Min Temperature:<br/>{forecast.main.temp_min}&#176;C</p>
                <p>Max Temperature:<br/>{forecast.main.temp_max}&#176;C</p>
              </div>
            </div>
          );
        })
      }

      { props.error && <p>{props.error}</p> }
    </div>
  )
}

export default Weather;
