import { initialState, SEARCH_PRODUCTS, SEARCHING } from './model';
import { normalize } from 'normalizr';
import { schemaCategory } from './schema';
import { ADD_DATA } from './model';

export const products = (state = initialState,action) => {
  let normalizedData = null;
  switch(action.type) {
    case ADD_DATA:
      normalizedData = normalize({categories:action.payload.data}, schemaCategory);
      
      return {
        ...state,
        categories: normalizedData.result.categories.map(
          item => normalizedData.entities.categories[item]),
        products: normalizedData.entities.products,
        isLoading: false
      }
    case SEARCH_PRODUCTS: 
      normalizedData = normalize({categories:action.payload.data}, schemaCategory);
      
      return {
        ...state,
        categories: normalizedData.result.categories.map(
          item => normalizedData.entities.categories[item]),
        products: normalizedData.entities.products,
        search: action.payload.search,
        isLoading: false
      }
    case SEARCHING:
      return { ...state, isLoading: true }
    default:
      return state; 
  }
}