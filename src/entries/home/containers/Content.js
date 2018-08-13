import React, {Component} from 'react';
import ContentLayout from '../layouts/Content-Layout';
import Search from '../components/Search';
import Categories from '../components/Categories';
import { connect } from 'react-redux';
const withQuery = require('with-query').default;

class ContentContainer extends Component {
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
    const query = text ? 
      {query : text } : {}
    fetch(withQuery('http://localhost:4000/search',query))
      .then(resp => resp.json())
      .then(response => {
        this.props.dispatch({
          type: 'SEARCH_PRODUCTS',
          payload: {
            data: response,
            search: text
          }
        })
      })
  }
  
  render() {
    return(
      <ContentLayout>
        <Search handleSearch={this.handleSearch}/>
        <Categories categories={this.props.categories}/>
      </ContentLayout>
    )
  }
}

export default connect()(ContentContainer);