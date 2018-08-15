import React from 'react';
import injectSheet from 'react-jss';
import { bluePrimary, fontBold, fontItalic} from '../../../styles/constants';
import Stars from '../../../shared/Stars/Stars';

const styles = {
  title: {
    marginTop:0
  },
  category: {
    fontSize: '12px',
    fontFamily: fontItalic
  },
  description: {
    textAlign: 'justify'
  },
  price: {
    color: bluePrimary,
    fontSize: '1.3em',
    fontFamily: fontBold
  }
}

const ProductDescription = props => (
  <div>
    <h1 className={props.classes.title}>{props.name}</h1>
    <p className={props.classes.category}>{props.categoryName}</p>
    <Stars valoration={props.valoration}></Stars>
    <p className={props.classes.description}>{props.description}</p>
    <p className={props.classes.price}>${props.price}</p>
  </div>
)

export default injectSheet(styles)(ProductDescription);