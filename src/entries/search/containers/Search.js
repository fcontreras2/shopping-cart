import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/Search-Layout';
import SearchInput from '../components/Search-Input';
import Categories from '../components/Categories';

import { searchProducts } from '../../../store/products/actions';
import { updateSearch } from '../../../store/filters/actions';
import FiltersCategories from '../components/Filters-Categories';
import NavBarTopLayout from '../../../shared/NavBarTop/layouts/NavBarTop-Layout';
import Loading from '../components/Loading';

class SearchContainer extends Component {
  state = {
    showFilters: false
  }

  filters = React.createRef()

  handleSearch = event => {
    const text = event.target.value;
    this.setState({
      search: text
    })
    clearTimeout(this.state.isSearch);
    this.setState({
      isSearch:setTimeout(() => this.processSearch(text), 2000)
    });
  }

  handleShowFilters = () => this.setState({showFilters: !this.state.showFilters})
  
  componentWillMount() {
    // Si se habia realizado un busqueda previa
    if (this.props.search !== this.state.search)
      this.setState({
        search: this.props.search
      })
    document.addEventListener('mousedown',this.mouseCategories, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown',this.mouseCategories, false)
  }

  mouseCategories = event => {
 
  }

  processSearch = text => {
    const query = text ? {query : text } : {}
    this.props.updateSearch(query);
    this.props.searchProducts(query);
  }
  
  render() {
    return(
      <SearchLayout>
        <NavBarTopLayout
          left={
            <SearchInput
              search={this.state.search} 
              handleSearch={this.handleSearch}/>
          }
          right={
            <FiltersCategories 
            ref={(ref) => this.filters = ref}
            handleShowFilters={this.handleShowFilters}
            showFilters={this.state.showFilters} 
            categories={this.props.filters}/>
          }
        >
        </NavBarTopLayout>
        { !this.props.isLoading ?
        
          <Categories categories={this.props.categories}/>
          :
          <Loading/>
        }
      </SearchLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories:state.products.categories,
    filters: state.filters.categories,
    search: state.filters.search,
    isLoading: state.products.isLoading
  }
}

export default connect(mapStateToProps,{updateSearch,searchProducts})(SearchContainer);