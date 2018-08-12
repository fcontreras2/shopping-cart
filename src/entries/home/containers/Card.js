import React, {Component} from 'react';
import CardLayout from '../layouts/Card-Layout';
import CardImage from '../components/Card-Image';
import CardDescription from '../components/Card-Description';
import CardButton from '../components/Card-Button';
import { connect } from 'react-redux';
class Card extends Component {
  render() {
    return(
      <CardLayout>
        <CardImage image={this.props.product.image} title={this.props.product.title}/>
        <CardDescription {...this.props.product}/>
        <CardButton/>
      </CardLayout>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    product:state.category.products[props.product]
  }
}

export default connect(mapStateToProps)(Card);