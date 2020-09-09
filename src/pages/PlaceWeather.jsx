import React from 'react';

import CurrWeather from '../components/CurrWeather';
import { useFetch } from '../hooks/fetchData-hook';
import BigSearch from '../components/BigSearch';
import DailyWeather from '../components/DailyWeather';

function PlaceWeather({searchPlace}) {
  const option = 'weatherManyDays';
  const { fetchData, temprFormat, fetchPlace } = useFetch(option);

  console.log('fetchData from placeWeather: ', fetchData);

  return (
    <div className="place__weather">
      {fetchData ? (
        <div className="card__weather">
          <CurrWeather
            CurrWeatherData={fetchData.current}
            temprFormat={temprFormat}
            place={fetchPlace}
          />
          {fetchData.daily.map((daily) => (
            <DailyWeather
              key={daily.dt}
              dailyWeatherDate={daily}
              temprFormat={temprFormat}
              place={fetchPlace}
            />
          ))}
        </div>
      ) : (
        <BigSearch searchPlace={searchPlace} alertMessage/>
      )}
    </div>
  );
}

export default PlaceWeather;
