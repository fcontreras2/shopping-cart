import { ADD_DATA, SEARCH_PRODUCTS, SEARCHING } from './model'
import { querySearch, queryData } from './queries';
import { addCategories } from '../filters/actions';

export const searching = () => {
  return {
    type: SEARCHING
  }
}

// Obtener todos los productos
export const addProducts = (data) => (
  (dispatch) => {
    dispatch(searching())
    setTimeout(() => {
      queryData().then(response=> {
        dispatch({
          type: ADD_DATA,
          payload: { data:response }
        })
        dispatch(addCategories(response))
      })
    },500)
  }
)

export const searchProducts = (query) => (
  (dispatch, getState) => {
    dispatch(searching())
    setTimeout(() => {
      if (getState().filters.query !== '')
        query.filters = getState().filters.query
      querySearch(query).then(response => {
        dispatch({
          type: SEARCH_PRODUCTS,
          payload: { data: response, query }
        })
      })
    }, 500);
  }
)