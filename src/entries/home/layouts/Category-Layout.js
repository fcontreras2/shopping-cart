import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    category:{ 
      padding: '0%'
    }
}

const CategoryLayout = ({classes,children}) => (
  <div className={`row ${classes.category}`}>
    {children}
  </div> 
)

export default injectSheet(styles)(CategoryLayout)