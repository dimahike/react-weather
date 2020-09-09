import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import PlaceWeather from './pages/PlaceWeather';
import { Context } from './context';

function App() {

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

  return (
    <Context.Provider value={selectedFormat}>
      <Router>
        <div className="wrapper">
          <Header searchPlace={searchPlace} onChangeTemprFormat={onHandleSelect} />
          <Switch>
            <Route exact path="/place/:placeName">
              <PlaceWeather searchPlace={searchPlace}/>
            </Route>
            <Route path="/">
              <Home searchPlace={searchPlace} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
