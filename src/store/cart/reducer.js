import { initialState, ADD_PRODUCT, REMOVE_PRODUCT } from './model';
import { loadCart } from '../../shared/localStorage/localStorage';

export const cart = (state = initialState,action) => {
  switch(action.type) {
    case ADD_PRODUCT:
    case REMOVE_PRODUCT:
      let id = action.payload.product.id;
      if (state.products[id]) {
        delete state.products[id];
        state.count--;
      } else {
        state.products[id] = action.payload.product
        state.count++;
      }
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