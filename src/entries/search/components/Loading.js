import React from 'react';
import injectSheet from 'react-jss'
import { verticalContent } from '../../../styles/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let styles = {...verticalContent}

const Loading = ({classes}) => (
  <div className={classes.verticalContent}>
    <FontAwesomeIcon icon="spinner" pulse/>
    <span>&nbsp;Buscando resultados</span>
  </div>
)

export default injectSheet(styles)(Loading)