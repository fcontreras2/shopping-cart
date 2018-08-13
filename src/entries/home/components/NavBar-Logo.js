import React from 'react';
import injectSheet from 'react-jss';
import {grayPrimary} from '../../../styles/constants'
const styles = {
  boxLogo: {
    '& hr': {
      borderTop: grayPrimary+'63'
    }
  },
  image: {
    width: '120px',
    marginTop: '10px'
  }
}
const NavBarLogo = ({classes}) => 
  <div className={classes.boxLogo}>
    
    <img src="/images/logo.png" alt="Cart Photos Logo" className={classes.image}/>
    <hr/>
  </div>

export default injectSheet(styles)(NavBarLogo)