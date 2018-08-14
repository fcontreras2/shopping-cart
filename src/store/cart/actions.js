import { ADD_PRODUCT, REMOVE_PRODUCT} from './model';

export const addProduct = data => ( 
  {
    type : ADD_PRODUCT,
    payload: { product: data }
  }
) 

export const removeProduct = data => (
  {
    type: REMOVE_PRODUCT,
    payload: { product: data }
  }
)
