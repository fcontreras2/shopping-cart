import React from 'react';
import injectSheet from 'react-jss';
import {content} from '../../../styles/constants';

const CartLayout = ({classes,children}) => (
  <div className={`col-12 ${classes.content}`} >
    <div className="row">
      {children}
    </div>
  </div>
)

export default injectSheet(content)(CartLayout);

