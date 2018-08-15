import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../../store/cart/actions'
import ProductLayout from '../layouts/Product-Layout';
import ProductImage from '../components/Product-Image';
import ProductDescription from '../components/Product-Description';
import ProductGoBack from '../components/Product-Go-Back';
import NavBarTopLayout from '../../../shared/NavBarTop/layouts/NavBarTop-Layout';
import ProductCart from '../../../shared/ProductCart/ProductCart';

class Product extends Component {
 
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
    if (this.props.product)
      return(
        <div className="row">
          <NavBarTopLayout
            right={<ProductGoBack handleClickBack={this.props.history.goBack}/>}
          >
          </NavBarTopLayout>
          <ProductLayout
            left={
              <div>
                <ProductImage image={this.props.product.image}/>
                <ProductCart
                  maxCount={this.props.product.stock}
                  count={this.props.count}
                  isAdded={this.props.isAdded} 
                  handleClickButton={this.handleClickButton}
                  handleAddCount={this.handleAddCount}
                  handleSubstractCount={this.handleSubstractCount}
                  ></ProductCart>
              </div>
            }
            right={
              <ProductDescription {...this.props.product}/>
            }>
          </ProductLayout>
        </div>
      )
    else  
      return (null)
  }
} 

const mapStateToProps = (state, props) => { 
  const isAdded = typeof state.cart.products[props.match.params.id] === 'object';

  return {
    isAdded,
    count: isAdded ? state.cart.products[props.match.params.id].count: null,
    product: state.products.products[props.match.params.id],
  }
}

export default connect(mapStateToProps,Actions)(Product);