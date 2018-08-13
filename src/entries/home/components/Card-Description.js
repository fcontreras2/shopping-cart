import React from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bluePrimary , fontBold} from '../../../styles/constants';

const styles = {
  description: {    
    textAlign: 'center',
    '& p,ul': {
      marginTop: 10,
      marginBottom: 10
    }
  },
  title: {
    height: '22px',
    overflow: 'hidden'
  },
  stars: {
    listStyle: 'none',
    padding: 0,
    '& li': {
      opacity: 0.2,
      display: 'inline-block',
      fontSize: '0.8em',
      padding: '1px'
    },
    '& .active': {
      opacity: 0.8,
      color: '#f3f33a'
    }
  },
  price: {
    color: bluePrimary,
    fontFamily: fontBold
  }
}

const CardDescription = props => (
  <div className={props.classes.description}>
    <p className={props.classes.title}> {props.name}</p>
    <ul className={props.classes.stars}>
      {
        [...Array(5)].map((i,key) =>
        <li key={key} className={ key < props.valoration? `active` : ''}><FontAwesomeIcon  icon={'star'}/></li>
        )          
      }
    </ul>
    <p className={props.classes.price}>${props.price}</p>
  </div>
)

export default injectSheet(styles)(CardDescription)