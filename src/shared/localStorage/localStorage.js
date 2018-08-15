import { initialState } from "../../store/cart/model";

export const loadCart = () => {
  try { 
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null)
      return initialState
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export const saveCart = (cart) => {
  try {
    const serializedState = JSON.stringify(cart);
    localStorage.setItem('cart',serializedState)
  } catch (err) {}
}