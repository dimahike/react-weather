import React from 'react';

import axios from 'axios';

import { Context } from '../context';
// import { fetch } from "../fetch/fetch-data"

export const useFetch = (option) => {
  const { temprFormat, place } = React.useContext(Context);
  const [fetchData, setfetchData] = React.useState();
  const [fetchPlace, setFetchPlace] = React.useState(place);

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
        console.log('url fetch: currPlace');
        urlFetch = `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=${temprFormat}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      }
      if (option === 'aroundCities') {
        console.log('url fetch: aroundCities');
        urlFetch = `http://api.openweathermap.org/data/2.5/find?lat=${crd.latitude}&lon=${crd.longitude}&units=${temprFormat}&cnt=10&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      }
      if (option === 'weatherManyDays') {
        // find coordinate from google map

        axios
          .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=${temprFormat}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
          )
          .then(({ data }) => {
            const coord = data.coord;
            console.log('url fetch many days:', coord);
            urlFetch = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly&units=${temprFormat}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            console.log('urlFetch from weatherManyDays', urlFetch);
            setFetchPlace(data);
            console.log('fetchPlace from weatherManyDays: ', data.name);
            fetch(urlFetch);
          });
      }
      fetch(urlFetch);
      console.log('urlFetch in parent from weatherManyDays', urlFetch);
    }

    const fetch = async (urlFetch) => {
      try {
        await axios
          .get(urlFetch)
          .then(({ data }) => {
            setfetchData(data);
            console.log('data in fetch: ', data);
          })
          .catch((err) => {});
      } catch (err) {
        console.log('Error fetch', err);
      }
    };
  }, [temprFormat, option, place, fetchPlace.name]);

  return { temprFormat, fetchData, fetchPlace };
};
