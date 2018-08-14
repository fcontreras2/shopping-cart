import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  margin :{
    marginTop: '2%'
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