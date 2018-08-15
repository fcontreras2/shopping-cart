// Estado inicial
export const initialState = {
  products: {},
  count: 0,
  total: 0
}

export const substract = (a,b) => (parseFloat((Number(a)-Number(b)).toFixed(2)))

// ACTIONS TYPES
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_PRODUCT_COUNT = 'ADD_PRODUCT_COUNT';
export const SUBSTRACT_PRODUCT_COUNT = 'SUBSTRACT_PRODUCT_COUNT';
