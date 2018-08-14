import React from 'react';
import { fontBold, fontItalic, grayPrimary } from '../../../styles/constants';

import injectSheet from 'react-jss';
import CategoryLayout from '../layouts/Category-Layout';
import Card from '../containers/Card';

const styles = {
  category: {
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
  }
}

const Categories = ({categories,classes}) => (
  categories.map((category) => (
    <div key={category.id} className={classes.category}>
      <h1>{category.name}</h1>
      <h4>{category.products.length} productos</h4>
      <CategoryLayout>
        {
          category.products.map((product,key) => (
            <Card key={key} product={product}/>
          ))
        }
      </CategoryLayout>
    </div>
  ))
)

export default injectSheet(styles)(Categories);
