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

var cuttentlyDay = function (unitCode) {
  const dateToday = new Date(unitCode * 1000);
  const day = days[dateToday.getDay()];
  const date = dateToday.getDate();
  const month = months[dateToday.getMonth()];

  return `${day}, ${date} ${month}`;
};

var sunTime = function (unitCode) {
  const dateSunrise = new Date(unitCode * 1000);
  const hours = dateSunrise.getHours();
  const minutes = dateSunrise.getMinutes();
  return `${hours}:${minutes}`;
};

var degToCard = function (deg) {
  if (deg > 11.25 && deg < 33.75) {
    return 'NNE';
  } else if (deg > 33.75 && deg < 56.25) {
    return 'ENE';
  } else if (deg > 56.25 && deg < 78.75) {
    return 'E';
  } else if (deg > 78.75 && deg < 101.25) {
    return 'ESE';
  } else if (deg > 101.25 && deg < 123.75) {
    return 'ESE';
  } else if (deg > 123.75 && deg < 146.25) {
    return 'SE';
  } else if (deg > 146.25 && deg < 168.75) {
    return 'SSE';
  } else if (deg > 168.75 && deg < 191.25) {
    return 'S';
  } else if (deg > 191.25 && deg < 213.75) {
    return 'SSW';
  } else if (deg > 213.75 && deg < 236.25) {
    return 'SW';
  } else if (deg > 236.25 && deg < 258.75) {
    return 'WSW';
  } else if (deg > 258.75 && deg < 281.25) {
    return 'W';
  } else if (deg > 281.25 && deg < 303.75) {
    return 'WNW';
  } else if (deg > 303.75 && deg < 326.25) {
    return 'NW';
  } else if (deg > 326.25 && deg < 348.75) {
    return 'NNW';
  } else {
    return 'N';
  }
};

function CardWeather({ weatherData, temprFormat, place }) {
  const {
    dt,
    sunrise,
    sunset,
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
  } = weatherData;

  const tempratureFormat = format[temprFormat];

  const todayTime = cuttentlyDay(dt);
  const todaySunrise = sunTime(sunrise);
  const todaySunset = sunTime(sunset);

  console.log('fullDate', todayTime);

  const directWind = degToCard(wind_deg);

  return (
    <div className="grid__container">
      <div className="grid1">
        <h2>{place}</h2>
        <p>{todayTime}</p>
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

export default CardWeather;
