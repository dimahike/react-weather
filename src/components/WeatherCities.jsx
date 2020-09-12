import React from 'react';

import { useFetch } from '../hooks/fetchData-hook';
import { useHistory } from 'react-router-dom';

function WeatherCities({ searchPlace }) {
  const option = 'aroundCities';
  const history = useHistory();

  const { temprFormat, fetchData } = useFetch(option);


  const handleClick = (fetchCity, coord) => () => {
    const place = {
      address: `${fetchCity.name}, ${fetchCity.sys.country}`,
      coordinates: {
        lat: coord.lat,
        lng: coord.lon,
      },
    };
  
    searchPlace(place);
    history.push('/place/' + fetchCity.name);
  };

  return (
    <div className="weather__cities">
      <div className="weather__table">
        {fetchData &&
          fetchData.list.map((fetchCity) => (
            <h3 key={fetchCity.id} onClick={handleClick(fetchCity, fetchCity.coord)}>
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
