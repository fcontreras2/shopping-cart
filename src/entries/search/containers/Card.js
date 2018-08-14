import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, removeProduct } from '../../../store/cart/actions'

import CardLayout from '../layouts/Card-Layout';
import CardImage from '../components/Card-Image';
import CardDescription from '../components/Card-Description';
import CardButton from '../components/Card-Button';

class Card extends Component {

  handleClickButton = () => {
    if (this.props.isAdded)  
      this.props.removeProduct(this.props.product)
    else
      this.props.addProduct(this.props.product)
  }

  render() {
    return(
      <CardLayout>
        <Link to={`/product/${this.props.product.id}`}>
          <CardImage image={this.props.product.image} title={this.props.product.title}/>
          <CardDescription {...this.props.product}/>
        </Link>
        <CardButton
          isAdded={this.props.isAdded} 
          handleClickButton={this.handleClickButton}
        />
      </CardLayout>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    product : state.products.products[props.product],
    isAdded : typeof state.cart.products[props.product] === 'object' ? true : false
  }
}

export default connect(mapStateToProps, {addProduct, removeProduct})(Card);