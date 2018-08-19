import React from 'react';
import { grayPrimary, bluePrimary } from '../../../styles/constants';
import injectSheet from 'react-jss';

const styles = {
  list : {
    listStyle: 'none',
    background: '#fff',
    padding: '1%',
    top: '7%',
    right: '1.5%',
    zIndex: 10001,
    border: `1px solid ${grayPrimary}69`, 
    position: 'fixed',
    "& li:hover": {
      color: bluePrimary
    },
    '& label': {
      cursor: 'pointer',
    }
  }
}
const Filters = ({classes,categories, handleApplyFilter}) => (
  <ul className={classes.list}>
    {
      categories.map((category,key) => (
        <li 
          key={key} 
          index={key} 
          onClick={handleApplyFilter}>    
          <label index={key} >
            <input
              checked={`${category.isActive ? null: ''}`} 
              type="checkbox"/>
            {category.name}
          </label>
        </li>
      ))
    }
  </ul>
)

export default injectSheet(styles)(Filters);