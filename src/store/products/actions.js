import {ADD_DATA} from './model'

// Obtener todos los productos
export const addProducts = (data) => {
  return{
    type: ADD_DATA,
    payload: { data }
  }
}
