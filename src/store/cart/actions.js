import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_PRODUCT_COUNT, SUBSTRACT_PRODUCT_COUNT} from './model';

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

export const addProductCount = id => (
  {
    type: ADD_PRODUCT_COUNT,
    payload: {id}
  }
)

export const subtractProductCount = id => (
  {
    type: SUBSTRACT_PRODUCT_COUNT,
    payload: {id}
  }
)