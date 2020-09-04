export const fetchData = (urlFetch) => {
  axios.get(urlFetch).then(({ data }) => {
    console.log('data: ', data);
    returnsetfetchData(data);
  });
};
