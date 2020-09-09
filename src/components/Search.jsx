import React from 'react';
import { useHistory } from 'react-router-dom';

function Search({ searchPlace, className, hiddenSubmit = true, mediaHideInput = true }) {
  const [inputValue, setInputValue] = React.useState('');
  const history = useHistory();


  const onHandleInput = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const onHandleSubmit = (event) => {
    searchPlace(inputValue);
    history.push('/place/' + inputValue);
    setInputValue('');
    event.preventDefault();
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        onChange={onHandleInput}
        value={inputValue}
        className={`search__input ${className} ${mediaHideInput && 'hide-input'}`}
        name="searchPlace"
        type="text"
        placeholder="Search lacation, index"
      />
      {hiddenSubmit && (
        <input
          className={`search__submit ${mediaHideInput && 'hide-input'}`}
          type="submit"
          value="search"
        />
      )}
    </form>
  );
}

export default Search;
