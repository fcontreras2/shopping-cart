import { initialState, ADD_CATEGORIES, UPDATE_SEARCH } from './model';
import { normalize } from 'normalizr';
import { schemaFilters } from './schema';

export const filters = (state = initialState,action) => {
  let normalizedData = null;
  switch(action.type) {
    case ADD_CATEGORIES:
      normalizedData = normalize({categories:action.payload.data}, schemaFilters);
      return {
        ...state,
        categories: normalizedData.result.categories.map(
          item => normalizedData.entities.categories[item])
      }
    case UPDATE_SEARCH: 
      return {...state,search: action.payload.search}
    default:
      return state; 
  }
}