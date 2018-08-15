import React from 'react';
import injectSheet from 'react-jss';
import { bluePrimary , fontBold} from '../../../styles/constants';
import Stars from '../../../shared/Stars/Stars';

const styles = {
  description: {
    textAlign: 'center',
    '& p,ul': {
      marginTop: 10,
      marginBottom: 10
    },
    '& a': {
      textDecoration:'none',    
    }
  },
  title: {
    height: '22px',
    overflow: 'hidden'
  },
  price: {
    color: bluePrimary,
    fontFamily: fontBold
  }
}

const CardDescription = props => (
  <div className={props.classes.description}>
    <p className={props.classes.title}> {props.name}</p>
    <Stars valoration={props.valoration}></Stars>
    <p className={props.classes.price}>${props.price}</p>
  </div>
)

export default injectSheet(styles)(CardDescription)