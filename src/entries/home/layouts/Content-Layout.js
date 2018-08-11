import React from 'react';

const ContentLayout = props => {
  return(
    <div className="col-9">
      {props.children}
    </div>
  )
}

export default ContentLayout;