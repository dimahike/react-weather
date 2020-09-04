import React from 'react';
// import axios from 'axios';

import CardWeather from '../components/CardWeather';
import { useFetch } from '../hooks/fetchData-hook';
import BigSearch from '../components/BigSearch';
// import { Context } from '../context';

function PlaceWeather() {
  //   const [coord, setCoord] = React.useState();
  //   const place = React.useContext(Context).place;
  const option = 'weatherManyDays';
  const { fetchData, temprFormat, place } = useFetch(option);
  console.log('fetchData from placeWeather: ', fetchData);

  //   if (fetchData) {
  //     const { current, daily } = fetchData;
  //   }

  return (
    <div className="place__weather">
      {fetchData ? (
        <CardWeather weatherData={fetchData.current} temprFormat={temprFormat} place={place} />
      ) : (
        <BigSearch />
      )}
    </div>
  );
}

export default PlaceWeather;
