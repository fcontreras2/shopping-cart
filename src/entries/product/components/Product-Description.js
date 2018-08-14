import React from 'react';

const ProductDescription = props => (
  <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <p>{props.price}</p>
  </div>
)

export default ProductDescription;