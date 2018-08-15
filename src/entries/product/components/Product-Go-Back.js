import React from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { grayPrimary, bluePrimary } from '../../../styles/constants';
import { navBarTopButton } from '../../../styles/constants';

let styles = {navBarTopButton};

const ProductGoBack = ({classes,handleClickBack}) => (
  <div className={classes.navBarTopButton}>
    <button onClick={handleClickBack}><FontAwesomeIcon icon="arrow-left"/> Volver</button>
  </div>
)

export default injectSheet(styles)(ProductGoBack);