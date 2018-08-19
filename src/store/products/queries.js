const withQuery = require('with-query').default;
const API_URL = "https://shopping-cart-data.herokuapp.com/";

export const queryData = () => (
  fetch(API_URL + 'categories/')
    .then(resp => resp.json())
)
  
export const querySearch = query => (
  fetch(withQuery(API_URL + 'search',query)).then(resp => resp.json())
)