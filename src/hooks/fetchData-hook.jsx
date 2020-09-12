import React from 'react';

import axios from 'axios';

import { Context } from '../context';

export const useFetch = (option) => {
  const { temprFormat, place } = React.useContext(Context);
  const [fetchData, setfetchData] = React.useState();
  const { address, coordinates } = place;

  React.useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    function success(pos) {
      var crd;

      crd = pos.coords;

      if (!crd) {
        crd = {
          latitude: 50.4547,
          longitude: 30.5238,
        };
      }

      let urlFetch;

      if (option === 'currPlace') {
        urlFetch = `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=${temprFormat}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      }
      if (option === 'aroundCities') {
        urlFetch = `http://api.openweathermap.org/data/2.5/find?lat=${crd.latitude}&lon=${crd.longitude}&units=${temprFormat}&cnt=10&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      }
      if (option === 'weatherManyDays') {
        urlFetch = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lng}&exclude=minutely,hourly&units=${temprFormat}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      }
      fetch(urlFetch);
    }

    const fetch = async (urlFetch) => {
      await axios
        .get(urlFetch)
        .then(({ data }) => {
          setfetchData(data);
        })
        .catch((err) => console.log(err));
    };
  }, [temprFormat, option, place]);
  return { temprFormat, fetchData, address };
};
