import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from '../../../store/cart/actions'

import CardLayout from '../layouts/Card-Layout';
import CardImage from '../components/Card-Image';
import CardDescription from '../components/Card-Description';
import ProductCart from '../../../shared/ProductCart/ProductCart';

class Card extends Component {

  handleClickButton = () => {
    if (this.props.isAdded)  
      this.props.removeProduct(this.props.product)
    else
      this.props.addProduct(this.props.product)
  }

  handleAddCount = () => {
    this.props.addProductCount(this.props.product.id)
  }

  handleSubstractCount = () => {
    this.props.subtractProductCount(this.props.product.id)
  }

  render() {
    
    if (this.props.product === undefined)
      return null

    return(
      <CardLayout isAdded={this.props.isAdded}>
        <Link to={`/product/${this.props.product.id}`}>
          <CardImage image={this.props.product.image} title={this.props.product.title}/>
          <CardDescription {...this.props.product}/>
        </Link>
        <ProductCart
          maxCount={this.props.product.stock}
          count={this.props.count}
          isAdded={this.props.isAdded} 
          handleClickButton={this.handleClickButton}
          handleAddCount={this.handleAddCount}
          handleSubstractCount={this.handleSubstractCount}
        />
      </CardLayout>
    )
  }
}

const mapStateToProps = (state, props) => {
  const isAdded = typeof state.cart.products[props.product] === 'object';
  
  return {
    count: isAdded ? state.cart.products[props.product].count: null,
    product : state.products.products[props.product],
    isAdded
  }
}

export default connect(mapStateToProps, Actions )(Card);