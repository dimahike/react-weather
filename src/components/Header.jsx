import React from 'react';
import { Link } from 'react-router-dom';

import weatherLogo from '../assets/img/weatherLogo.png';
import Search from './Search';
import { Context } from '../context';

function Header({ onChangeTemprFormat, searchPlace }) {
  const temprFormat = React.useContext(Context).temprFormat;

  return (
    <div className="header">
      <div className="container">
        <div>
          <Link to="/">
            <div className="header__logo">
              <img width="38" src={weatherLogo} alt="Weater logo" />
              <div>
                <h1>Your Weather</h1>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Search searchPlace={searchPlace} />
          <select
            onChange={(e) => onChangeTemprFormat(e)}
            className="header__select_type_temp"
            name="select"
            value={temprFormat}>
            <option name="celsia" value="metric">
              °C
            </option>
            <option name="fahrenheit" value="imperial">
              °F
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
