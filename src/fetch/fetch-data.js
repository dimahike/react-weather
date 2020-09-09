import axios from 'axios';

export const fetchPlace = async (urlFetch) => {
  
    await axios.get(urlFetch).then(({ data }) => {
      console.log('data: ', data);
      return data;
    });
  
};
