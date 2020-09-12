import React from 'react';

import {unitDatetoNormal, format} from '../functions'

function DailyWeather({ dailyWeatherDate, temprFormat, place }) {
  const { dt, temp, weather, feels_like } = dailyWeatherDate;

  const tempratureFormat = format[temprFormat];
  const date = unitDatetoNormal(dt);

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
              {Math.round(temp.day)} {tempratureFormat}
            </h1>
          </div>
        </div>
        <h3>{weather[0].description}</h3>
      </div>
      <div className="grid2">
        <ul className="place__weather__list__items">
          <li>
            Morning
            <span>
              {Math.round(temp.morn)} {tempratureFormat}
            </span>
          </li>
          <li>
            Day
            <span>
              {Math.round(temp.day)} {tempratureFormat}
            </span>
          </li>
          <li>
            Evening
            <span>
              {Math.round(temp.eve)} {tempratureFormat}
            </span>
          </li>
          <li>
            Night
            <span>
              {Math.round(temp.night)} {tempratureFormat}
            </span>
          </li>
        </ul>
      </div>
      <div className="grid3">
        <ul className="place__weather__list__items">
          <li>
            Minimum
            <span>
              {Math.round(temp.min)} {tempratureFormat}
            </span>
          </li>
          <li>
            Maximum
            <span>
              {Math.round(temp.max)} {tempratureFormat}
            </span>
          </li>
        </ul>
      </div>
      <div className="grid4">
        <ul className="place__weather__list__items">
          <li>
            Morning (RealFeel)
            <span>
              {Math.round(feels_like.morn)} {tempratureFormat}
            </span>
          </li>
          <li>
            Day (RealFeel)
            <span>
              {Math.round(feels_like.day)} {tempratureFormat}
            </span>
          </li>
          <li>
            Evening (RealFeel)
            <span>
              {Math.round(feels_like.eve)} {tempratureFormat}
            </span>
          </li>
          <li>
            Night (RealFeel)
            <span>
              {Math.round(feels_like.night)} {tempratureFormat}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DailyWeather;
