import React, {Component} from 'react';
import { connect } from 'react-redux';
import CartLayout from '../layouts/Cart-Layout';
import CartPrice from '../components/Cart-Price';
import CartEmpty from '../components/CartEmpty';
import GoBack from '../../../shared/GoBack/GoBack';
import CartProducts from '../components/Cart-Products';
import NavBarTop from '../../../shared/NavBarTop/containers/NavBarTop';

class Cart extends Component {
  render() {
    return(
      <CartLayout>
        <NavBarTop
          left={ <CartPrice total={Number(this.props.total).toFixed(2)}></CartPrice>}
          right={<GoBack handleClickBack={this.props.history.goBack}/>} 
        />
          { this.props.count > 0 ?
            <CartProducts products={this.props.products}/>
            : <CartEmpty/>
          }
      </CartLayout>
    )
  }
}

const mapStateToProps = state => (
  {
    products: Object.values(state.cart.products),
    count: state.cart.count,
    aux: state.products.products,
    total: state.cart.total
  }
)

export default connect(mapStateToProps)(Cart);