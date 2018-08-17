import React from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoad from 'react-lazyload';

const styles = {
  cardImage: {
    '&:hover': {
      icon : {
        zIndex: '1000',
      }
    }
  },
  image: {
    width: '100%',
    transition: 'all 0.4s linear',
    '&:hover': {
      filter: 'sepia(100%)',
      zIndex: 9
    }
  },
  icon :{
    display: 'none',
    position: 'absolute',
    top: '25%',
    color: 'gray',
    left: '46%'
  }
}

const CardImage = props => (
  <div className={props.classes.cardImage}>
    <FontAwesomeIcon icon='search' className={props.classes.icon}/>
    <LazyLoad 
      height={150}
      placeholder={
        <img src='/images/logo-lazy.jpg' alt={props.name}/>
      }>
      <img 
        src={props.image} 
        alt={props.name} 
        className={props.classes.image}/>
    </LazyLoad>
  </div>
)

export default injectSheet(styles)(CardImage);