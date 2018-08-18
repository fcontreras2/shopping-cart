import React from 'react';
import { navBarTopText } from '../../../styles/constants';
import injectSheet from 'react-jss';

const CartPrice = props => (
  <p className={props.classes.text} >Total: ${props.total}</p>
)

export default injectSheet(navBarTopText)(CartPrice);