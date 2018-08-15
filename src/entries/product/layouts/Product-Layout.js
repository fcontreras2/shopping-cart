import React from 'react';
import injectSheet from 'react-jss';
import {content} from '../../../styles/constants';

let styles = {...content,
  ...{
    padding: {padding:'20px'}
  }
}

const ProductLayout = ({classes,left,right}) => (
  <div className={`col-12`}>
    <div className={`row`}>
      <div className={`col-4 ${classes.content} ${classes.padding}`}>
        {left}
      </div>
      <div className={`col-8 ${classes.content} ${classes.padding}`}>
        {right}
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(ProductLayout);