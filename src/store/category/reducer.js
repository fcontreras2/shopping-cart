import { initialState } from './model';
import { normalize } from 'normalizr';
import { schemaCategory } from './schema';

export const category = (state = initialState,action) => {
  let normalizedData = null;
  switch(action.type) {
    case 'ADD_DATA':
      normalizedData = normalize({categories:action.payload.data}, schemaCategory);
      
      return {
        ...state,
        categories: normalizedData.result.categories.map(
          item => normalizedData.entities.categories[item]),
        products: normalizedData.entities.products
      }
    case 'SEARCH_PRODUCTS': 
      normalizedData = normalize({categories:action.payload.data}, schemaCategory);
      
      return {
        ...state,
        categories: normalizedData.result.categories.map(
          item => normalizedData.entities.categories[item]),
        products: normalizedData.entities.products,
        search: action.payload.search
      }
    default:
      return state; 
  }
}