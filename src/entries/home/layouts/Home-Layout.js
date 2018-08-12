import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    margin: 0,
    padding: 0
  }
}

const HomeLayout = ({classes,children}) => (
  <div className={`row ${classes.container}`}>
    {children}
  </div>
)

export default injectSheet(styles)(HomeLayout);