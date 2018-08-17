import React from 'react';
import injectSheet from 'react-jss'
import {bluePrimary, fontBold} from '../../../styles/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const styles = {
  content: {
    color: bluePrimary,
    fontFamily: fontBold,
    lineHeight:'88vh',
    fontSize: '1.2em',
    textAlign: 'center',
    '*': {
      verticalAlign:'middle' 
    }    
  }
}

const Loading = ({classes}) => (
  <div className={classes.content}>
    <FontAwesomeIcon icon="spinner" pulse/>
    <span className={classes.text}>&nbsp;Buscando resultados</span>
  </div>
)

export default injectSheet(styles)(Loading)