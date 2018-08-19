import React, {Component} from 'react';
import NavBarLayout from '../layouts/NavBar-Layout';
import { connect } from 'react-redux';
import NavBarLogo  from '../components/NavBar-Logo';
import NavBarSections from '../components/NavBar-Sections';
import NavBarRepository from '../components/NavBar-Repository';
import { closeNav } from '../../../store/nav/actions';

class NavBarContainer extends Component {

  handleCloseNav = () =>{
    this.props.closeNav()
  }
  render() {
    return(
      this.props.show ?
      <NavBarLayout
        handleCloseNav={this.handleCloseNav}>
        <NavBarLogo/>
        <NavBarSections total={this.props.total} products={this.props.products}/>
        <NavBarRepository/>
      </NavBarLayout>
      : null
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories:state.filters.categories,
    products: state.cart.count,
    total: state.cart.total,
    show: state.nav.show
  }
}

export default connect(mapStateToProps,{closeNav})(NavBarContainer);
