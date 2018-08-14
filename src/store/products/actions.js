import {ADD_DATA, SEARCH_PRODUCTS} from './model'

// Obtener todos los productos
export const addProducts = (data) => {
  return{
    type: ADD_DATA,
    payload: { data }
  }
}

export const searchProducts = ({response, search}) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: { data: response, search }
  }
}