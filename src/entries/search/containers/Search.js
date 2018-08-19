import React, {Component} from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/Search-Layout';
import SearchInput from '../components/Search-Input';
import Categories from '../components/Categories';
import { applyFilter } from '../../../store/filters/actions';

import { searchProducts } from '../../../store/products/actions';
import { updateSearch } from '../../../store/filters/actions';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';
import Filters from '../components/Filters';
import ButtonFilters from '../components/Button-Filters';
import NavBarTop from '../../../shared/NavBarTop/containers/NavBarTop';

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

  handleShowFilters = () => this.setState({showFilters: true})
  
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
    if(this.state.showFilters && !this.filters.contains(event.target))
      this.setState({showFilters: false})
  }

  handleApplyFilter = event =>  {
    if (event.target.getAttribute('index'))
      this.props.applyFilter(event.target.getAttribute('index'))
  }

  processSearch = text => {
    const query = text ? {query : text } : {}
    this.props.updateSearch(query);
    this.props.searchProducts(query);
  }
  
  render() {
    return(
      <SearchLayout>
        <NavBarTop
          left={
            <SearchInput
              search={this.state.search} 
              handleSearch={this.handleSearch}/>
          }
          right={
            <ButtonFilters 
            handleShowFilters={this.handleShowFilters}
            showFilters={this.state.showFilters} 
            categories={this.props.filters}/>
          }
        />
        { !this.props.isLoading ?
          
          (
            this.props.categories.length > 0 ?
            <Categories categories={this.props.categories}/>
            :
            <NotFound/>
          )
          : <Loading/>
        }
      
        {
          this.state.showFilters &&
          <div ref={ node => this.filters = node}>
            <Filters
              handleApplyFilter={this.handleApplyFilter} 
              categories={this.props.filters}/>
          </div>
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

export default connect(mapStateToProps,{updateSearch,searchProducts, applyFilter})(SearchContainer);