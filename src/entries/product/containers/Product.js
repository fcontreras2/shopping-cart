import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../../../store/cart/actions'
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
                  isAdded={this.props.isAdded}  
                  handleClickButton={this.handleClickButton}></ProductCart>
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

const mapStateToProps = (state, props) => (
  {
    product: state.products.products[props.match.params.id],
    isAdded : typeof state.cart.products[props.match.params.id] === 'object' ? true : false
  }
)

export default connect(mapStateToProps,{addProduct, removeProduct})(Product);