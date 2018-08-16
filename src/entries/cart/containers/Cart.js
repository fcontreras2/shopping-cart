import React, {Component} from 'react';
import { connect } from 'react-redux';
import CartLayout from '../layouts/Cart-Layout';
import CartProduct  from '../components/Cart-Product';
import NavBarTopLayout from '../../../shared/NavBarTop/layouts/NavBarTop-Layout';
import Card from '../../search/containers/Card';

class Cart extends Component {
  render() {
    return(
      <CartLayout>
        <NavBarTopLayout></NavBarTopLayout>
          { this.props.count > 0 ?
            this.props.products.map((item,key) => (
              <Card key={key} product={item.id}/>
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
    count: state.cart.count,
    aux: state.products.products
  }
)

export default connect(mapStateToProps)(Cart);