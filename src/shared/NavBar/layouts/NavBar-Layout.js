import React from 'react';
import injectSheet from 'react-jss';
import { grayPrimary, graySecundary } from '../../../styles/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  navBar: {
    padding: 0,
    height: '100vh',
    position: 'fixed',
    background:`${grayPrimary}05`,
    backgroundColor:`${grayPrimary}05`,
    color: `${grayPrimary}`,
    top: 0,
    zIndex: 20000,
    borderRight: `1px  solid ${grayPrimary}63`,
    '@media (max-width: 767px)': {
      backgroundColor:`${graySecundary}`,
      marginTop: '70px',
      right: '0%',
      transition: 'all 0s linear'
    },
  },
  close: {
    display: 'none',
    position: 'absolute',
    top: '2%',
    fontSize:'16px',
    right: '10px',
    '@media (max-width: 767px)': {
      display: 'block'
    }
  }
}

const NavBarLayout = ({classes, children, handleCloseNav}) => ( 
  <div className={`col-md-3 ${classes.navBar}`}>
    <FontAwesomeIcon 
      icon="times" 
      onClick={handleCloseNav}
      className={classes.close}/>
    {children}
  </div>
)

export default injectSheet(styles)(NavBarLayout);