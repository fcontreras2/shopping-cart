import React, {Component} from 'react';
import { connect } from 'react-redux';
import CartLayout from '../layouts/Cart-Layout';
import CartProduct  from '../components/Cart-Product';

class Cart extends Component {
  render() {
    return(
      <CartLayout>
        { this.props.count > 0 ?
          this.props.products.map(item => (
            <CartProduct {...item}/>
          ))
          : <p>No tiene nada agregado</p>
        }
      </CartLayout>
    )
  }
}

const mapStateToProps = state => (
  {
    products: Object.values(state.cart.products),
    count: state.cart.count
  }
)

export default connect(mapStateToProps)(Cart);