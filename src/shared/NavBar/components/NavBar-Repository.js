import React from 'react';
import injectSheet  from 'react-jss';
import { grayPrimary, fontItalic } from '../../../styles/constants';

const styles = {
  navBarRepository: {
    position: 'absolute',
    width: '100%',
    display:'block',
    background: grayPrimary+'14',
    borderTop: `1px solid ${grayPrimary}69`,
    bottom: 0,
    padding: '10px',
    left:0,
    '& img': {
      filter: 'grayscale(100%)',
      webkitFilter: 'grayscale(100%)',
      width: '60px'
    },
    '& p': {
      textDecoration: 'none',
      fontSize: '14px',
      color: grayPrimary,
      fontFamily: fontItalic,
      margin: 0,
      marginTop: '4px'
    }
  } 
}

const NavBarRepository = ({classes}) => (
  <a href="https://github.com/fcontreras2/shopping-cart" target="_blank">
    <div className={classes.navBarRepository}>
      <div className="row">
        <div className="col-3">
          <img src="/images/logo-github.png"/>
        </div>
        <div className="col-9" style={{padding:0}}>
         <p>Fcontreras2 / Shopping Cart</p>
        </div>
      </div>
    </div>
  </a>
)

export default injectSheet(styles)(NavBarRepository) ;