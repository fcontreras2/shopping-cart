import { initialState, ADD_CATEGORIES, UPDATE_SEARCH, APPLY_FILTER } from './model';
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
          item => ({...normalizedData.entities.categories[item],...{isActive: false}}))
      }
    case UPDATE_SEARCH: 
      return {...state,search: action.payload.search }

    case APPLY_FILTER:
      const index = action.payload.filter
      state.categories[index].isActive = !state.categories[index].isActive
      
      let query = '';
      state.categories.forEach(e => {
        if (e.isActive)
          query += query === '' ? e.id : '-' + e.id
      })
      
      return {...state, 
        query
      }
    default:
      return state; 
  }
}