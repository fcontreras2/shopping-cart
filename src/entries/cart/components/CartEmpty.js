import React from 'react';
import injectSheet from 'react-jss'
import { verticalContent } from '../../../styles/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartEmpty = ({classes}) => (
  <div className={classes.verticalContent}>
    <FontAwesomeIcon icon="exclamation-triangle"/>
    <span>&nbsp;No tiene productos agregados.</span>
  </div>
)

export default injectSheet(verticalContent)(CartEmpty)