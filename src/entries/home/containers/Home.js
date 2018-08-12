import React, {Component} from 'react';
import { normalize } from 'normalizr';
import { connect } from 'react-redux';
import { schemaCategory } from '../../../store/category/schema';

import NavBar from '../containers/NavBar';
import HomeLayout from '../layouts/Home-Layout';
import Content from './Content';


class HomeContainer extends Component {

  state = {
    categories: []
  }

  componentWillMount = () => {
    fetch('https://shopping-cart-data.herokuapp.com/categories/')
      .then(response => response.json())
      .then(response => {
        const normalizedData = normalize({categories:response}, schemaCategory);
        console.log(normalizedData)
        this.props.dispatch({
          type: 'ADD_DATA',
          payload: {
            categories: normalizedData.result.categories.map(
              item => normalizedData.entities.categories[item]),
            products: normalizedData.entities.products
          }
        })
        this.setState({categories: response})
      })
  }

  render() {
    return(
      <HomeLayout>
        <NavBar categories={this.props.categories}/>
        <Content categories={this.props.categories}/>
      </HomeLayout>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories:state.category.categories
  }
}

export default connect(mapStateToProps)(HomeContainer);