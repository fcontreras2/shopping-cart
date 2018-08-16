import React from 'react';
import injectSheet from 'react-jss';
import { grayPrimary, graySecundary } from '../../../styles/constants';

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
    transition: 'all 1s linear',
    '@media (max-width: 767px)': {
      backgroundColor:`${graySecundary}`,
      marginTop: '70px',
      right: '100%',
      transition: 'none'
    },
  }
}

const NavBarLayout = ({classes, children}) => (
  <div className={`col-xs-8 col-md-3 ${classes.navBar}`}>
    {children}
  </div>
)

export default injectSheet(styles)(NavBarLayout);