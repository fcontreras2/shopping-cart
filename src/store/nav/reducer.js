import { initialState, OPEN_NAV, CLOSE_NAV } from './model';

export const nav = (state = initialState,action) => {
  switch(action.type) {
    case OPEN_NAV: return {show : true };
    case CLOSE_NAV: return { show : false};
    default:
      return state; 
  }
}