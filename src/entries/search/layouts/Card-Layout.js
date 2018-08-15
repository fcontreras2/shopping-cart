import React from 'react';
import injectSheet from 'react-jss';
import { grayPrimary, bluePrimary } from '../../../styles/constants';

const styles = {
  card: {
    cursor: 'pointer',
    padding: '6%',
    marginBottom: '20px',
    border: `1px solid ${grayPrimary}26`,
    transition: `all 0.2s linear`,
    '&:hover': {
      boxShadow: `0px 0px 2px 2px ${grayPrimary}26`
    }, 
    "& a": {
      textDecoration: 'none',
      color: grayPrimary
    }
  },
  active: {
    background: `${bluePrimary}24`
  }
}

const CardLayout = ({classes, isAdded, children}) => (
  <div className="col-3">
    <div className={`${classes.card} ${isAdded ? classes.active:''}` }>
      {children}
    </div>
  </div>
)

export default injectSheet(styles)(CardLayout);
