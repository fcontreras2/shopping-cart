import { initialState } from './model';

export const category = (state = initialState,action) => {
  switch(action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        categories: action.payload.categories,
        products: action.payload.products
      }
    default:
      return state; 
  }
}