import React from 'react';
import injectSheet from 'react-jss';
import {grayPrimary, bluePrimary, fontRegular} from '../../../styles/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  button: {
    textAlign: 'center',
    '& button': {
      fontFamily: fontRegular,
      background:'#fff',
      color: grayPrimary,
      border: `2px solid ${grayPrimary}26`,
      padding: '5%',
      cursor:'pointer',
      transition: 'all 0.2s linear'
    }
  },
  add: {
    '&:hover': {
      border: `2px solid ${bluePrimary}`,
      color: '#fff',
      background: bluePrimary
    }
  }
} 

const CardButton = props => (
  <div className={props.classes.button}>
    <button className={props.classes.add} onClick={props.handleClickButton}>
      <FontAwesomeIcon icon={'cart-plus'}/>
      &nbsp;Agregar 
    </button>
  </div>
)

export default injectSheet(styles)(CardButton)