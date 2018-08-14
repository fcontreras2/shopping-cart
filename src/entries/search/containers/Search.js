import React, {Component} from 'react';
import SearchLayout from '../layouts/Search-Layout';
import SearchInput from '../components/Search-Input';
import Categories from '../components/Categories';

import { searchProducts } from '../../../store/products/actions';
import { connect } from 'react-redux';
const withQuery = require('with-query').default;


class SearchContainer extends Component {
  state = {
    isSearch: setTimeout(() => {}, 0)
  }

  handleSearch = event => {
    clearTimeout(this.state.isSearch);
    const text = event.target.value;
    this.setState({
      isSearch:setTimeout(() => this.processSearch(text), 2000)
    });
  }

  processSearch = text => {
    const query = text ? {query : text } : {}
    
    fetch(withQuery('http://localhost:4000/search',query))
      .then(resp => resp.json())
      .then(response => {
        this.props.searchProducts({response, text})
      })
  }
  
  render() {
    return(
      <SearchLayout>
        <SearchInput handleSearch={this.handleSearch}/>
        <Categories categories={this.props.categories}/>
      </SearchLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories:state.products.categories
  }
}

export default connect(mapStateToProps,{searchProducts})(SearchContainer);