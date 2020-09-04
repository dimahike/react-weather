import React from 'react';
import Search from './Search';
// import axios from 'axios';

// import { Context } from '../context';
import { useFetch } from '../hooks/fetchData-hook';

function BigSearch({ searchPlace }) {
  const option = 'currPlace';

  const { temprFormat, fetchData } = useFetch(option);

  console.log('FfetchData in bigSearch: ', fetchData);

  let placeName;
  let weatherStates;
  let temp;
  let country;

  if (fetchData) {
    placeName = fetchData.name;
    weatherStates = fetchData.weather;
    temp = Math.round(fetchData.main.temp);
    country = fetchData.sys.country;
  }

  return (
    <div className="big__search">
      <Search
        searchPlace={searchPlace}
        className="search__big__input"
        hiddenSubmit={false}
        mediaHideInput={false}
      />

      {fetchData && (
        <div className="extra__cities">
          <div className="curr__place">
            <h3>
              {placeName}, {country}
              <span>
                {weatherStates.map((weatherState) => (
                  <img
                    key={weatherState.id}
                    src={`http://openweathermap.org/img/wn/${weatherState.icon}@2x.png`}
                    alt="icon"
                  />
                ))}
                <span>
                  {temp}
                  {temprFormat === 'metric' ? '° C' : '°F'}
                </span>
              </span>
            </h3>
          </div>
          {/* <div className="right">
            <h3>
              Kyiv, Ukraine <span> 27° C</span>
            </h3>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default BigSearch;
