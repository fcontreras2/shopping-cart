import React, {Component} from 'react';
import { connect } from 'react-redux';
import CartLayout from '../layouts/Cart-Layout';
import CartProduct  from '../components/Cart-Product';
import NavBarTopLayout from '../../../shared/NavBarTop/layouts/NavBarTop-Layout';

class Cart extends Component {
  render() {
    return(
      <div className="row">
         <NavBarTopLayout></NavBarTopLayout>  
        <CartLayout>
          { this.props.count > 0 ?
            this.props.products.map(item => (
              <CartProduct key={item.id} {...item}/>
            ))
            : <p>No tiene nada agregado</p>
          }
        </CartLayout>
      </div>
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