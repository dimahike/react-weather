import React from 'react';

import {unitDatetoNormal, sunTime, degToCard, format} from '../functions'

function CurrWeather({ CurrWeatherData, temprFormat, place }) {
  const {
    dt,
    sunrise,
    sunset,
    temp,
    feels_like,
    weather,
    wind_deg,
    wind_speed,
    humidity,
    uvi,
    pressure,
    clouds,
    visibility,
  } = CurrWeatherData;

  const tempratureFormat = format[temprFormat];

  const date = unitDatetoNormal(dt);
  const todaySunrise = sunTime(sunrise);
  const todaySunset = sunTime(sunset);
  const directWind = degToCard(wind_deg);

  return (
    
      <div className="grid__container">
        <div className="grid1">
          <h2>{place}</h2>
          <p>{date}</p>
          <div>
            <div className="left">
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="weather icon"
              />
            </div>
            <div className="right">
              <h1>
                {Math.round(temp)} {tempratureFormat}
              </h1>
            </div>
          </div>
          <h2>{weather[0].description}</h2>
        </div>
        <div className="grid2">
          <ul className="place__weather__list__items">
            <li>
              <span>RealFeel</span>
              <span>
                {Math.round(feels_like)}
                {tempratureFormat}
              </span>
            </li>
            <li>
              <span>Sunsise</span> <span>{todaySunrise}</span>
            </li>
            <li>
              <span>Sunset</span> <span>{todaySunset}</span>
            </li>
            <li>
              <span>Maximum UV Index</span> <span>{Math.round(uvi)}</span>
            </li>
          </ul>
        </div>
        <div className="grid3">
          <ul className="place__weather__list__items">
            <li>
              <span>Wind</span> <span>{directWind}</span>
            </li>
            <li>
              <span>Wind speed</span>
              <span>
                {Math.round(wind_speed)} {temprFormat === 'metric' ? 'meter/sec' : 'miles/hour'}
              </span>
            </li>
            <li>
              <span>Humidity</span> <span>{Math.round(humidity)}%</span>
            </li>
          </ul>
        </div>
        <div className="grid4">
          <ul className="place__weather__list__items">
            <li>
              <span>Pressure</span> <span>{Math.round(pressure)} mbar</span>
            </li>
            <li>
              <span>Overcast</span> <span>{Math.round(clouds)} %</span>
            </li>
            <li>
              <span>Visibility</span> <span>{Math.round(visibility)} m</span>
            </li>
          </ul>
        </div>
      </div>
   
  
  );
}

export default CurrWeather;
