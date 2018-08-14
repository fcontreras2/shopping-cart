import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductLayout from '../layouts/Product-Layout';
import ProductImage from '../components/Product-Image';
import ProductDescription from '../components/Product-Description';

class Product extends Component {
  render() {
    if (this.props.product)
      return(
        <ProductLayout
          left={<ProductImage image={this.props.product.image}/>}
          right={
            <ProductDescription {...this.props.product}/>
          }>
        </ProductLayout>
      )
    else  
      return (null)
  }
} 

const mapStateToProps = (state, props) => (
  {
    product: state.products.products[props.match.params.id]
  }
)

export default connect(mapStateToProps)(Product);