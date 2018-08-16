import React from 'react';
import injectSheet from 'react-jss';
import { grayPrimary } from '../../../styles/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const styles = {
  filtersLayout: {
    minHeight: '71px',
    width: '75%',
    position: 'fixed',
    display: 'block',
    background: '#fff',
    zIndex: 1000,
    top: 0,
    padding: '20px',
    borderBottom: `1px solid ${grayPrimary}69`,
    paddingBottom: '14px',
    '@media (max-width: 767px)': {
      width:'100%'
    },
  },
  left: {
    float: 'left'
  },
  rigth: {
    float: 'right'
  },
  menu: {
    display:'none',
    '@media (max-width: 767px)': {
      display:'block',
      float:'left',
      marginTop: '10px',
      marginRight: '10px',
      cursor: 'pointer'
    },
  }
}

const NavBarTopLayout = ({classes,left, right}) => (
  <div className={classes.filtersLayout}>
    <div className={classes.left}>
      <FontAwesomeIcon icon="bars" className={classes.menu}></FontAwesomeIcon>
      {left}
    </div>
    <div className={classes.right}>
      {right}
    </div>
  </div>
)
export default injectSheet(styles)(NavBarTopLayout);