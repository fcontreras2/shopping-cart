import React from 'react';

const ProductLayout = props => (
  <div className="row">
      <div className="col-3">
        {props.left}
      </div>
      <div className="col-9">
        {props.right}
      </div>
  </div>
)

export default ProductLayout;
