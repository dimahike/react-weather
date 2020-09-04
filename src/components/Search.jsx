import React from 'react';
import { useHistory } from 'react-router-dom';

// import { useFetch } from '../hooks/fetchData-hook';

function Search({ searchPlace, className, hiddenSubmit = true, mediaHideInput = true }) {
  const [inputValue, setInputValue] = React.useState('');
  // const placeName = useParams().placeName;
  const history = useHistory();
  // const option = 'currPlace';
  // const { fetchData } = useFetch(option, inputValue);

  const onHandleInput = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const onHandleSubmit = (event) => {
    // alert('Отправленное город: ' + inputValue);
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
