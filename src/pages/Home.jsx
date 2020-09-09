import React from 'react';
import BigSearch from '../components/BigSearch';
import WeatherCities from '../components/WeatherCities';

function Home({ searchPlace }) {
  console.log("searchPlace from home: ", searchPlace);
  return (
    <div>
      <BigSearch searchPlace={searchPlace} />
      <WeatherCities searchPlace={searchPlace} />
    </div>
  );
}

export default Home;
