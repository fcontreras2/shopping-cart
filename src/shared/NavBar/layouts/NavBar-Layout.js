import React from 'react';
import injectSheet from 'react-jss';
import { grayPrimary } from '../../../styles/constants';

const styles = {
  navBar: {
    padding: 0,
    height: '100vh',
    position: 'fixed',
    background:`${grayPrimary}05`,
    color: `${grayPrimary}`,
    top: 0,
    borderRight: `1px  solid ${grayPrimary}63`
  }
}

const NavBarLayout = ({classes, children}) => (
  <div className={`col-3 ${classes.navBar}`}>
    {children}
  </div>
)

export default injectSheet(styles)(NavBarLayout);