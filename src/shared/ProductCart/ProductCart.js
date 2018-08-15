import React from 'react';
import injectSheet from 'react-jss';
import {grayPrimary, bluePrimary, fontRegular, redPrimary } from '../../styles/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const button = {
  fontFamily: fontRegular,
  background:'#fff',
  color: grayPrimary,
  border: `2px solid ${grayPrimary}26`,
  padding: '5%',
  cursor:'pointer',
  transition: 'all 0.2s linear'
}

const styles = {
  button: {
    textAlign: 'center',
    '& button': button
  },
  add: {
    '&:hover': {
      border: `2px solid ${bluePrimary}`,
      color: '#fff',
      background: bluePrimary
    }
  },
  remove: {
    color: redPrimary + ' !important',  
    '&:hover': {
      border: `2px solid ${redPrimary}` ,
      color: '#fff !important',
      background: redPrimary
    }
  },
  options: {
    width: '100%',
    display: 'inline-block',
    '& button': {
      float: 'left',
      display: 'block'
    }
  }
} 

const ProductCart = props => (
  <div className={props.classes.button}>
    { !props.isAdded ? (
      <button className={props.classes.add} onClick={props.handleClickButton}>
        <FontAwesomeIcon icon={'cart-plus'}/>
        &nbsp;Agregar 
      </button>
    ) : (
      <div className={props.classes.options}>
        <button disabled={props.count === 1} onClick={props.handleSubstractCount}>-</button>
        <button >{props.count}</button>
        <button disabled={props.maxCount === props.count} onClick={props.handleAddCount}>+</button>
        <button className={props.classes.remove} onClick={props.handleClickButton}>
          <FontAwesomeIcon icon={'cart-arrow-down'}/>
          &nbsp;Eliminar 
        </button>
      </div>
    )}    
  </div>
)

export default injectSheet(styles)(ProductCart)