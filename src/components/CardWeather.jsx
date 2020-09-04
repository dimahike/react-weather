import React from 'react';

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var format = {
  metric: '°C',
  imperial: '°F',
};

function CardWeather({ weatherData, temprFormat, place }) {
  const {
    dt,
    temp,
    weather,
    feels_like,
    wind_deg,
    wind_speed,
    humidity,
    uvi,
    pressure,
    visibility,
    clouds,
    sunrise,
    sunset
  } = weatherData;

  
  var d = new Date(dt * 1000);

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];

  const fullDate = `${day}, ${date} ${month}`;

  const tempratureFormat = format[temprFormat];

  console.log('fullDate', fullDate);
  return (
    <div className="grid__container">
      <div className="grid1">
        <h2>{place}</h2>
        <p>{fullDate}</p>
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
            <h3>RealFeel </h3>
          </div>
        </div>
        <h3>{weather[0].main}</h3>
      </div>
      <div className="grid2">
        <ul className="place__weather__list__items">
          <li>
            <span>Sunsise</span> <span>middle</span>
          </li>
          <li>
            <span>Sunset</span> <span>middle</span>
          </li>
          <li>
            <span>RealFeel</span>
            <span>
              {Math.round(feels_like)}
              {tempratureFormat}
            </span>
          </li>
        </ul>
      </div>
      <div className="grid3">
        <ul className="place__weather__list__items">
          <li>
            <span>Maximum UV Index</span> <span>{Math.round(uvi)}</span>
          </li>
          <li>
            <span>Wind</span> <span>{wind_deg}</span>
          </li>
          <li>
            <span>Gusts of wind</span> <span>{Math.round(wind_speed)} km/h</span>
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
          <li>
            <span>Probability of precipitation</span> <span>2%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardWeather;
