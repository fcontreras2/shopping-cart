import React, {Component} from 'react';
import { connect } from 'react-redux';

import NavBar from '../containers/NavBar';
import HomeLayout from '../layouts/Home-Layout';
import Content from './Content';

class HomeContainer extends Component {

  componentWillMount = () => {
    fetch('https://shopping-cart-data.herokuapp.com/categories/')
      .then(resp => resp.json())      
      .then(response => {
        this.props.dispatch({
          type: 'ADD_CATEGORIES',
          payload: { data: response }
        })
        this.props.dispatch({
          type: 'ADD_DATA',
          payload: { data: response }
        })
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
    categories:state.category.categories
  }
}

export default connect(mapStateToProps)(HomeContainer);