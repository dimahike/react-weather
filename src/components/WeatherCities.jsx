import React from 'react';
import { useFetch } from '../hooks/fetchData-hook';
// import { useFetch } from '../hooks/fetchData-hook';
// import axios from 'axios';

function WeatherCities() {
  const option = 'aroundCities';
  
  const { temprFormat, fetchData } = useFetch(option);



  return (
    <div className="weather__cities">
      <div className="weather__table">
        {fetchData &&
          fetchData.list.map((fetchCity) => (
            <h3 key={fetchCity.id}>
              {fetchCity.name}, {fetchCity.sys.country}
              <span>
                {fetchCity.weather.map((weatherState) => (
                  <img
                    key={weatherState.id}
                    src={`http://openweathermap.org/img/wn/${weatherState.icon}@2x.png`}
                    alt="icon"
                  />
                ))}
                <span>
                  {Math.round(fetchCity.main.temp)}
                  {temprFormat === 'metric' ? '° C' : '°F'}
                </span>
              </span>
            </h3>
          ))}
      </div>
    </div>
  );
}

export default WeatherCities;
