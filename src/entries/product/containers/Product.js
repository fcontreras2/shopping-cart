import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductLayout from '../layouts/Product-Layout';
import ProductImage from '../components/Product-Image';
import ProductDescription from '../components/Product-Description';
import ProductGoBack from '../components/Product-Go-Back';
import NavBarTopLayout from '../../../shared/NavBarTop/layouts/NavBarTop-Layout';

class Product extends Component {
 
  render() {
    if (this.props.product)
      return(
        <div className="row">
          <NavBarTopLayout
            right={<ProductGoBack handleClickBack={this.props.history.goBack}/>}
          >
          </NavBarTopLayout>
          <ProductLayout
            left={<ProductImage image={this.props.product.image}/>}
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
    product: state.products.products[props.match.params.id]
  }
)

export default connect(mapStateToProps)(Product);