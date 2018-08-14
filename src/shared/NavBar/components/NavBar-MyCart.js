import React from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { grayPrimary, bluePrimary } from '../../../styles/constants';
import { Link } from 'react-router-dom'

const styles = {
  boxCart: {
    paddingTop: 10,
    '& hr': {
      borderTop: grayPrimary+'63'
    },
    '& :hover' : {
      color: bluePrimary
    }
  },
  link: {
    display: 'block',
    paddingBottom: '10px',
    color: grayPrimary,
    textDecoration: 'none',
    transition: 'all 0.4s linear'
  }
}
const NavBarMyCart = ({classes, products}) => 
  <div className={classes.boxCart}>
    <Link to="/cart" className={classes.link}>
      <FontAwesomeIcon icon="shopping-cart"/> 
      &nbsp;My cart ({products})
    </Link>
    <hr/>
  </div>

export default injectSheet(styles)(NavBarMyCart);
