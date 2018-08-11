import React, {Component} from 'react';
import ContentLayout from '../layouts/Content-Layout';
import Search from '../components/Search';

class ContentContainer extends Component {
  render() {
    return(
      <ContentLayout>
        <Search/>
      </ContentLayout>
    )
  }
}

export default ContentContainer;