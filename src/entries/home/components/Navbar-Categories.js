import React from 'react';
import injectSheet from 'react-jss';
import { bluePrimary } from '../../../styles/constants';

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    lineHeight: '32px',
    '& span': {
      textAlgin:'center',
      cursor: 'pointer',
      position: 'relative',
      color: 'inherit',
      textDecoration: 'none',
      transition: 'all 0.3s linear',
      '&:hover':{
        color: bluePrimary,
        '&:after' :{
          width: '100%',
          left:0,
        }
      },
      '&:after': {
          content: '""',
          bottom: 0,
          width: 0,
          left: '50%',
          position: 'absolute',
          background: bluePrimary,
          height: '1px',
          transition: 'all 0.3s ease-out',
      }
    },
  }
}

const NavBarCategories = ({categories,classes}) => (
    <ul className={classes.list}>
      {
        categories.map((item) => (
          <li key={item.id}>
            <span>
              {item.name}
            </span>
          </li>
        ))
      }
    </ul>
) 

export default injectSheet(styles)(NavBarCategories);