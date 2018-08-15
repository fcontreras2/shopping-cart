import { 
  initialState, 
  ADD_PRODUCT, 
  REMOVE_PRODUCT, 
  ADD_PRODUCT_COUNT, 
  SUBSTRACT_PRODUCT_COUNT,
  substract
} from './model';

import { loadCart } from '../../shared/localStorage/localStorage';

export const cart = (state = initialState,action) => {
  switch(action.type) {
    case ADD_PRODUCT:
    case REMOVE_PRODUCT:
      let id = action.payload.product.id;
      if (state.products[id]) {
        state.total = substract(state.total, (state.products[id].price * state.products[id].count))
        delete state.products[id];
        state.count--;
      } else {
        action.payload.product.count = 1
        state.products[id] = action.payload.product
        state.count++;
        state.total = Number(state.total) + Number(state.products[id].price);
      }
      return {
        ...state
      }

    case ADD_PRODUCT_COUNT: 
      state.products[action.payload.id].count++;
      state.total += state.products[action.payload.id].price
      return {
        ...state
      }
    case SUBSTRACT_PRODUCT_COUNT:
      state.products[action.payload.id].count--;  
      state.total = substract(state.total, state.products[action.payload.id].price)
      return {
        ...state
      }
    default:
      // Verificar si ya existe datos guardados previamente
      let storageCart = loadCart()
      if (storageCart !== state)
        return storageCart;
      return state; 
  }
}