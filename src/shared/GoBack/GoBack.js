import React from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navBarTopButton } from '../../styles/constants';

let styles = {navBarTopButton};

const GoBack = ({classes,handleClickBack}) => (
  <div className={classes.navBarTopButton}>
    <button onClick={handleClickBack}><FontAwesomeIcon icon="arrow-left"/> Volver</button>
  </div>
)

export default injectSheet(styles)(GoBack);