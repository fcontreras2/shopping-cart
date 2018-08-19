import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { products } from './products/reducer'
import { filters } from './filters/reducer';
import { cart } from './cart/reducer';
import { nav } from './nav/reducer';
import { saveCart } from '../shared/localStorage/localStorage';

const reducers = combineReducers({
  products,
  filters,
  cart,
  nav
})

export const store = createStore(
  reducers,
  {}, // Estado inicial del proyecto
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(() => {
  let cart = store.getState()['cart']
  saveCart(cart)
})
