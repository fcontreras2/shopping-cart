import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  image: {
    width: '100%'
  }
}

const ProductImage = ({classes,image,title}) => (
  <img className={classes.image} src={image} alt={title}/>
)

export default injectSheet(styles)(ProductImage);