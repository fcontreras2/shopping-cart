import React from 'react';
import injectSheet from 'react-jss';
import {content} from '../../../styles/constants';

const SearchLayout = ({classes, children}) => (
  <div className="row">
    <div className={`col-12 ${classes.content}`} >
      {children}
    </div>
  </div>
)

export default injectSheet(content)(SearchLayout);