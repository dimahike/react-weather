import React from 'react';
import Search from './Search';

import { useFetch } from '../hooks/fetchData-hook';
import { useHistory } from 'react-router-dom';

function BigSearch({ searchPlace, alertMessage = false }) {
  const option = 'currPlace';
  const history = useHistory();

  const { temprFormat, fetchData } = useFetch(option);

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

  const handleClick = (value) => () => {
    searchPlace(value);
    history.push('/place/' + value);
  };

  return (
    <div className="big__search">
      {alertMessage && (
        <div className="alert-message">
          <div>
            <h2>We didn't find the search place.</h2>
            <h3>Try one more time</h3>
          </div>
        </div>
      )}

      <Search
        searchPlace={searchPlace}
        className="search__big__input"
        hiddenSubmit={false}
        mediaHideInput={false}
      />

      {fetchData && (
        <div className="extra__cities">
          <div className="curr__place">
            <h3 onClick={handleClick(placeName)}>
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
        </div>
      )}
    </div>
  );
}

export default BigSearch;
