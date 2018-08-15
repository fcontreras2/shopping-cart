import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import injectSheet from 'react-jss';

const styles = {
  stars: {
    listStyle: 'none',
    padding: 0,
    '& li': {
      opacity: 0.2,
      display: 'inline-block',
      fontSize: '0.8em',
      padding: '1px'
    },
    '& .active': {
      opacity: 0.8,
      color: '#f3f33a'
    }
  }
}
const Stars = ({classes,valoration}) => (
  <ul className={classes.stars}>
  {
    [...Array(5)].map((i,key) =>
    <li key={key} className={ key < valoration? `active` : ''}><FontAwesomeIcon  icon={'star'}/></li>
    )          
  }
  </ul>
)

export default injectSheet(styles)(Stars)