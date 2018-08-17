import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { products } from './products/reducer'
import { filters } from './filters/reducer';
import { cart } from './cart/reducer';
import { saveCart } from '../shared/localStorage/localStorage';

const reducers = combineReducers({
  products,
  filters,
  cart
})

export const store = createStore(
  reducers,
  {}, // Estado inicial del proyecto
  compose(
    applyMiddleware(
      thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  )
);

store.subscribe(() => {
  let cart = store.getState()['cart']
  saveCart(cart)
})
