import React, {Component} from 'react';
import SearchLayout from '../layouts/Search-Layout';
import SearchInput from '../components/Search-Input';
import Categories from '../components/Categories';

import { searchProducts } from '../../../store/products/actions';
import { connect } from 'react-redux';
import FiltersCategories from '../components/Filters-Categories';
import NavBarTopLayout from '../../../shared/NavBarTop/layouts/NavBarTop-Layout';
const withQuery = require('with-query').default;

class SearchContainer extends Component {
  state = {
    isSearch: setTimeout(() => {}, 0),
    showFilters: false
  }

  handleSearch = event => {
    clearTimeout(this.state.isSearch);
    const text = event.target.value;
    this.setState({
      isSearch:setTimeout(() => this.processSearch(text), 2000)
    });
  }

  handleShowFilters = event => this.setState({showFilters: !this.state.showFilters})
  
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
        <NavBarTopLayout
          left={<SearchInput handleSearch={this.handleSearch}/>}
          right={<FiltersCategories  
            handleShowFilters={this.handleShowFilters}
            showFilters={this.state.showFilters} 
            categories={this.props.filters}/>}
        >
        </NavBarTopLayout>
        <Categories categories={this.props.categories}/>
      </SearchLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories:state.products.categories,
    filters: state.filters.categories
  }
}

export default connect(mapStateToProps,{searchProducts})(SearchContainer);