import React from 'react';
import injectSheet from 'react-jss';
import {content} from '../../../styles/constants';

let styles = {...content,
  ...{
    padding: {padding:'20px'}
  }
}

const ProductLayout = ({classes,left,right}) => (
  <div className={`row ${classes.content} ${classes.padding}`}>
      <div className="col-4">
        {left}
      </div>
      <div className="col-8">
        {right}
      </div>
  </div>
)

export default injectSheet(styles)(ProductLayout);