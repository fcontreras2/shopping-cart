import React, { Component } from 'react';
import NavBar from '../shared/NavBar/containers/NavBar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProducts } from '../store/products/actions';

import Search from './search/containers/Search';
import Product from './product/containers/Product';
import Cart from './cart/containers/Cart';

class App extends Component {

  componentWillMount = () => {
    // Consulta data productos y categorias
    this.props.addProducts();
  }
  
  render() {
    return(
      <Router>
        <div>
          <NavBar/>
          <div className="offset-md-3 col-xs-12 col-md-9">
              <Route exact path="/" component={Search} />
              <Route path="/product/:id" component={Product}/>
              <Route exact path="/cart" component={Cart}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default connect(null,{addProducts})(App);