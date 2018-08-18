import React from 'react';
import injectSheet from 'react-jss'
import { verticalContent } from '../../../styles/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NotFound = ({classes}) => (
  <div className={classes.verticalContent}>
    <FontAwesomeIcon icon="exclamation-triangle"/>
    <span>&nbsp;No se encontraron productos para esta búsqueda</span>
  </div>
)

export default injectSheet(verticalContent)(NotFound)