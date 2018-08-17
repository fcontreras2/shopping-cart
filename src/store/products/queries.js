const withQuery = require('with-query').default;


export const queryData = () => (
  fetch('https://shopping-cart-data.herokuapp.com/categories/')
    .then(resp => resp.json())
)


export const querySearch = query => (
  fetch(withQuery('http://localhost:4000/search',query)).then(resp => resp.json())
)