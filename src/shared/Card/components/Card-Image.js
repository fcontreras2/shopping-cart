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
    <LazyLoad >
      <img src={props.image} alt={props.title} className={props.classes.image}/>
    </LazyLoad>
  </div>
)

export default injectSheet(styles)(CardImage);