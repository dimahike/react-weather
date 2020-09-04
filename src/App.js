import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import PlaceWeather from './pages/PlaceWeather';
import { Context } from './context';

function App() {
  // const format = React.useContext(Context);
  // console.log('App temprFormat: ', format.temprFormat);

  // localStorage.setItem(
  //   'userData',
  //   JSON.stringify({
  //     temprFormat: format.temprFormat,
  //   }),
  // );
  // const storeData = JSON.parse(localStorage.getItem('userData'));
  // console.log('storeData: ', storeData);

  const [selectedFormat, setSelectedFormat] = React.useState({
    temprFormat: 'metric',
    place: '',
  });

  const onHandleSelect = (event) => {
    setSelectedFormat({
      temprFormat: event.target.value,
      place: selectedFormat.place,
    });
  };

  const searchPlace = (place) => {
    setSelectedFormat({
      temprFormat: selectedFormat.temprFormat,
      place,
    });
    console.log('find place from App:', place);
  };

  console.log('selectedFormat from App: ', selectedFormat);
  // searchPlace = (place) => {
  //   console.log("place in App: ", place);
  // }

  // console.log('app value provider', { selectedFormat });
  // console.log("searchPlace in App: ", searchPlace);
  return (
    <Context.Provider value={selectedFormat}>
      <Router>
        <div className="wrapper">
          <Header searchPlace={searchPlace} onChangeTemprFormat={onHandleSelect} />
          <Switch>
            <Route exact path="/">
              <Home searchPlace={searchPlace} />
            </Route>
            <Route exact path="/place/:placeName">
              <PlaceWeather />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
