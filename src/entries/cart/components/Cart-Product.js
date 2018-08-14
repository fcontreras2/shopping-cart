import React from 'react';

const CartProduct = props => (
  <div className="col-12">
    <img src={props.image}/>
    <p>{props.name}</p>
    <p>{props.price}</p>
    <button> Remover</button>
  </div>
)

export default CartProduct;