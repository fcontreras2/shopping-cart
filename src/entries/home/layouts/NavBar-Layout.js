import React from 'react';

const NavBarLayout = props => {
  return(
    <div className="col-3 nav-section">
      {props.children}
    </div>
  )
}

export default NavBarLayout;