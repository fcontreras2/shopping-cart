import React, {Component} from 'react';
import { connect } from 'react-redux';
import CartLayout from '../layouts/Cart-Layout';
import NavBarTopLayout from '../../../shared/NavBarTop/layouts/NavBarTop-Layout';
import Card from '../../../shared/Card/containers/Card';
import CartPrice from '../components/Cart-Price';

class Cart extends Component {
  render() {
    return(
      <CartLayout>
        <NavBarTopLayout
          right={ <CartPrice total={Number(this.props.total).toFixed(2)}></CartPrice> }
        />
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
    aux: state.products.products,
    total: state.cart.total
  }
)

export default connect(mapStateToProps)(Cart);