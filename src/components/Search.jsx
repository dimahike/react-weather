import React from 'react';
import { useHistory } from 'react-router-dom';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function Search({ searchPlace, className, hiddenSubmit = true, mediaHideInput = true }) {
  const [address, setAddress] = React.useState('');
  const [coordinates, setCoordinates] = React.useState({
    lat: '',
    lng: '',
  });
  const history = useHistory();
  const place = { address, coordinates };

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (address, placeId) => {
    if (!placeId) {
      searchPlace(place);
      history.push('/place/' + address);
      setAddress('');
    }
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    setAddress(address);
    setCoordinates(latLng);
  };

  const onHandleSubmit = (event) => {
    searchPlace(place);
    history.push('/place/' + address);
    setAddress('');
    event.preventDefault();
  };

  return (
    <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="search">
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: `search__input ${className} ${mediaHideInput && 'hide-input'}`,
              })}
            />
            {hiddenSubmit && (
              <button
                className={`search__submit ${mediaHideInput && 'hide-input'}`}
                onClick={onHandleSubmit}>
                Search
              </button>
            )}
          </div>

          <div className="suggestions">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#c6c6c6', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };

              return (
                <div
                  className="suggestion__place "
                  key={suggestion.placeId}
                  {...getSuggestionItemProps(suggestion, {
                    style,
                  })}>
                  <i className="material-icons">location_on </i>{' '}
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default Search;
