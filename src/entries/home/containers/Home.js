import React, {Component} from 'react';
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
      .then(response => { this.setState({categories: response})})
  }

  render() {
    console.log(this.props.categories);
    return(
      <HomeLayout>
        <NavBar categories={this.state.categories}/>
        <Content categories={this.state.categories}/>
      </HomeLayout>
    )
  }
}

export default HomeContainer;