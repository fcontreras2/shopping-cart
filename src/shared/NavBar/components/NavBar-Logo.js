import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import {grayPrimary} from '../../../styles/constants'

const styles = {
  boxLogo: {
    '& hr': {
      borderTop: '1px solid ' + grayPrimary+'63'
    },
    background: grayPrimary+'14'
  },
  image: {
    marginLeft: '10px',
    width: '120px',
    marginTop: '10px'
  }
}
const NavBarLogo = ({classes}) => 
  <div className={classes.boxLogo}>
    <Link to="/">
      <img src="/images/logo.png" alt="Cart Photos Logo" className={classes.image}/>
    </Link>
    <hr/>
  </div>

export default injectSheet(styles)(NavBarLogo)