import React, {Component} from 'react';
import NavBarLayout from '../layouts/NavBar-Layout';
import NavbarCategories from '../components/Navbar-Categories';

class NavBarContainer extends Component {

  render() {
    return(
      <NavBarLayout>
        <NavbarCategories categories={this.props.categories}/>
      </NavBarLayout>
    )
  }
}

export default NavBarContainer;