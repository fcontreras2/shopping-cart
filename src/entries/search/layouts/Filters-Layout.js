import React from 'react';
import injectSheet from 'react-jss';
import { grayPrimary } from '../../../styles/constants'

const styles = {
  filtersLayout: {
    width: '75%',
    position: 'fixed',
    display: 'block',
    background: '#fff',
    zIndex: 1000,
    top: 0,
    padding: '20px',
    borderBottom: `1px solid ${grayPrimary}69`,
    paddingBottom: '14px'
  },
  left: {
    float: 'left'
  },
  rigth: {
    float: 'right'
  }
}

const FiltersLayout = ({classes,left, right}) => (
  <div className={classes.filtersLayout}>
    <div className={classes.left}>
      {left}
    </div>
    <div className={classes.right}>
      {right}
    </div>
  </div>
)
export default injectSheet(styles)(FiltersLayout);