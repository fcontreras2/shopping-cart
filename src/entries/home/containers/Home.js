import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addProducts } from '../../../store/products/actions';
import { addCategories } from '../../../store/filters/actions';

import NavBar from '../containers/NavBar';
import HomeLayout from '../layouts/Home-Layout';
import Content from './Content';

class HomeContainer extends Component {

  componentWillMount = () => {
    fetch('https://shopping-cart-data.herokuapp.com/categories/')
      .then(resp => resp.json())      
      .then(response => {
        this.props.addCategories(response)
        this.props.addProducts(response)
      })
  }

  render() {
    return(
      <HomeLayout>
        <NavBar/>
        <Content categories={this.props.categories}/>
      </HomeLayout>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories:state.products.categories
  }
}

export default connect(mapStateToProps,{addProducts,addCategories})(HomeContainer);