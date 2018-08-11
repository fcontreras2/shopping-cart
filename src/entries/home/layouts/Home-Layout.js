import React from 'react';

const HomeLayout = props => {
  return(
    <div className="row">
      {props.children}
    </div>
  )
}

export default HomeLayout;