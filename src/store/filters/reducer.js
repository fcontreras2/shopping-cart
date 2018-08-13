import { initialState } from './model';
import { normalize } from 'normalizr';
import { schemaFilters } from './schema';

export const filters = (state = initialState,action) => {
  let normalizedData = null;
  switch(action.type) {
    case 'ADD_CATEGORIES':
      normalizedData = normalize({categories:action.payload.data}, schemaFilters);
      return {
        ...state,
        categories: normalizedData.result.categories.map(
          item => normalizedData.entities.categories[item])
      }
    default:
      return state; 
  }
}