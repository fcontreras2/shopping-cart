import React, {Component} from 'react';
import NavBar from '../containers/NavBar';
import HomeLayout from '../layouts/Home-Layout';
import Content from './Content';

class HomeContainer extends Component {

  componentWillMount = () => {
    fetch('https://shopping-cart-data.herokuapp.com/categories/')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  render() {
    return(
      <HomeLayout>
        <NavBar/>
        <Content/>
      </HomeLayout>
    )
  }
}

export default HomeContainer;