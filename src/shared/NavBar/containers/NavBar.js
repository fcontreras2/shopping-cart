import React, {Component} from 'react';
import NavBarLayout from '../layouts/NavBar-Layout';
import { connect } from 'react-redux';
import NavBarLogo  from '../components/NavBar-Logo';
import NavBarSections from '../components/NavBar-Sections';
import NavBarRepository from '../components/NavBar-Repository';

class NavBarContainer extends Component {

  render() {
    return(
      <NavBarLayout>
        <NavBarLogo/>
        <NavBarSections products={this.props.products}/>
        <NavBarRepository/>
      </NavBarLayout>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories:state.filters.categories,
    products: state.cart.count
  }
}

export default connect(mapStateToProps)(NavBarContainer);
