import React, {Component} from 'react';
import NavBarLayout from '../layouts/NavBar-Layout';
import NavbarCategories from '../components/Navbar-Categories';
import { connect } from 'react-redux';

class NavBarContainer extends Component {

  render() {
    return(
      <NavBarLayout>
        <NavbarCategories categories={this.props.categories}/>
      </NavBarLayout>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories:state.filters.categories
  }
}

export default connect(mapStateToProps)(NavBarContainer);
