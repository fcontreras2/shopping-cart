import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  image: {
    width: '100%'
  }
}

const CardImage = props => (
  <img src={props.image} alt={props.title} className={props.classes.image}/>
)

export default injectSheet(styles)(CardImage);