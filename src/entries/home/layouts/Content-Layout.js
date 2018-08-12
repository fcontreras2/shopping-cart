import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  margin :{
    marginTop: '2%'
  }
}

const ContentLayout = ({classes, children}) => (
  <div className={`offset-3 col-9 ${classes.margin}`} >
    {children}
  </div>
)

export default injectSheet(styles)(ContentLayout);