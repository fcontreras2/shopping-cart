import { initialState } from './model';

export const cart = (state = initialState,action) => {
  switch(action.type) {
    case 'ADD_REMOVE_CART':
      const index = state.products.findIndex(e => e.id == action.payload.product.id)
      if (index >= 0)
        state.products.splice(index,1)
      else
        state.products.push(action.payload.product)
      return {
        ...state
      }
    default:
      return state; 
  }
}