import React from 'react';
import injectSheet from 'react-jss';
import { grayPrimary } from '../../../styles/constants';

const styles = {
  card: {
    cursor: 'pointer',
    padding: '6%',
    marginBottom: '20px',
    border: `1px solid ${grayPrimary}26`,
    transition: `all 0.2s linear`,
    '&:hover': {
      boxShadow: `0px 0px 2px 2px ${grayPrimary}26`
    } 
  }
}

const CardLayout = ({classes, children}) => (
  <div className="col-3">
    <div className={`${classes.card}`}>
      {children}
    </div>
  </div>
)

export default injectSheet(styles)(CardLayout);
