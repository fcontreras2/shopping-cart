import React from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { grayPrimary, bluePrimary } from '../../../styles/constants';
import { navBarTopButton } from '../../../styles/constants';


const active = {
  background: bluePrimary,
  color: '#fff',
  border: '2px solid #fff',
}

const filters = {
  listStyle: 'none',
  position: 'absolute',
  top: '65%',
  left: '72%',
  padding: '5px',
  width: '264px',
  lineHeight: '26px',
  border: `1px solid ${grayPrimary}69 !important`,
  zIndex: 1000,
  background: '#fff !important',
  color: grayPrimary+ ' !important',
  cursor: 'pointer',
}

const hover = {
  '& :hover,.active': active,
  '& ul': filters,
}

let styles = {navBarTopButton}
styles.navBarTopButton = {...styles.navBarTopButton,...hover}

const ButtonFilters = ({classes,categories, showFilters,handleShowFilters}) => (
  <div className={classes.navBarTopButton}>
    <button onClick={handleShowFilters}><FontAwesomeIcon icon="filter"/></button>
  </div>
)

export default injectSheet(styles)(ButtonFilters);