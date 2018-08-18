import React from 'react';
import { fontBold, fontItalic, grayPrimary } from '../../../styles/constants';

import injectSheet from 'react-jss';
import Card from '../../../shared/Card/containers/Card';

const styles = {
  category: {
    padding: '20px',
    '& h1' :{ 
      color: grayPrimary,
      fontFamily: fontBold,
      fontSize: '1.2em',
      marginBottom: 5
    },
    '& h4': {
      fontFamily:fontItalic,
      color: grayPrimary + '99',
      fontSize: '0.7em',
      marginTop: '0px'
    }
  },
  padding: {
    padding: 0
  }
}

const CartProducts = ({products,classes}) => (
    <div className={classes.category}>
      <h1>Tus productos</h1>
      <h4>{products.length} productos</h4>
      <div className={`row ${classes.padding}`} >
        {
          products.map((product,key) => (
            <Card 
              key={key} 
              state={'cart'} product={product.id}/>
          ))
        }
      </div>
    </div>
)

export default injectSheet(styles)(CartProducts);
