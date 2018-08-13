import { createStore, combineReducers } from 'redux';
import { category } from './category/reducer'
import { filters } from './filters/reducer';
import { cart } from './cart/reducer';

const reducers = combineReducers({
  filters,
  category,
  cart
})

export const store = createStore(
  reducers,
  {}, // Estado inicial del proyecto
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)