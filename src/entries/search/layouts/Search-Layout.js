import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  margin :{
    padding: 0,
    marginTop: '7%'
  }
}

const SearchLayout = ({classes, children}) => (
  <div className="row">
    <div className={`col-12 ${classes.margin}`} >
      {children}
    </div>
  </div>
)

export default injectSheet(styles)(SearchLayout);