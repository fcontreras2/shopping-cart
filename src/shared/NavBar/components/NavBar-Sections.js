import React from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { grayPrimary, bluePrimary } from '../../../styles/constants';
import { Link } from 'react-router-dom'

const styles = {
  boxCart: {
    paddingTop: 10,
    borderBottom: grayPrimary,
    '& :hover' : {
      color: bluePrimary
    },
    '& a': {
      padding: '10px'
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
const NavBarSections = ({classes, products}) => 
  <div className={classes.boxCart}>
    <Link to="/" className={classes.link}>
      <FontAwesomeIcon icon="search"/> 
      &nbsp; Buscar productos
    </Link>
    <Link to="/cart" className={classes.link}>
      <FontAwesomeIcon icon="shopping-cart"/> 
      &nbsp; My cart ({products})
    </Link>
  </div>

export default injectSheet(styles)(NavBarSections);
