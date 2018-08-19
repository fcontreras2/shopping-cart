import React, {Component} from 'react'
import { connect } from 'react-redux';
import { openNav } from '../../../store/nav/actions';
import NavBarTopLayout from '../layouts/NavBarTop-Layout';

class NavBarTop extends Component {

  handleOpenNav = () => {
    this.props.openNav()
  }

  render() {
    return (
      <NavBarTopLayout 
        handleOpenNav={this.handleOpenNav}
        left={this.props.left}
        right={this.props.right}
      />
    )
  }
}
const mapStateToProps  = ({nav},props) => (
  { 
    show: nav.show,
    left: props.left,
    right: props.right
  }
) 
export default connect(mapStateToProps,{openNav})(NavBarTop)