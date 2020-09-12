import { createContext } from 'react';

export const Context = createContext({
  temprFormat: 'metric',
  place: {
    address: '',
    coordinates: '',
  }
});
