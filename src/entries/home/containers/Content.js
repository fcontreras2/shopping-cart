import React, {Component} from 'react';
import ContentLayout from '../layouts/Content-Layout';
import Search from '../components/Search';
import Categories from '../components/Categories';

class ContentContainer extends Component {
  render() {
    return(
      <ContentLayout>
        <Search/>
        <Categories categories={this.props.categories}/>
      </ContentLayout>
    )
  }
}

export default ContentContainer;