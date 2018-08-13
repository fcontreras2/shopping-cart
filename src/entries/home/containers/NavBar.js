import React, {Component} from 'react';
import NavBarLayout from '../layouts/NavBar-Layout';
import NavbarCategories from '../components/Navbar-Categories';
import { connect } from 'react-redux';
import NavBarLogo  from '../components/NavBar-Logo';
import NavBarMyCart from '../components/NavBar-MyCart';
import { STATUS_CODES } from 'http';

class NavBarContainer extends Component {

  render() {
    return(
      <NavBarLayout>
        <NavBarLogo/>
        <NavBarMyCart products={this.props.products}/>
        <NavbarCategories categories={this.props.categories}/>
      </NavBarLayout>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories:state.filters.categories,
    products: state.cart.products.length
  }
}

export default connect(mapStateToProps)(NavBarContainer);
