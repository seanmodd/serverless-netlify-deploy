import { Flex, Heading, Spacer } from '@chakra-ui/layout';
import React from 'react';
import unsplash from '../components/api/unsplash';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import ImageList from '../components/udemy/ImageList';
import SearchBar from '../components/udemy/SearchBar';
import DcodeNavbar from '../components/udemy/youtube/DcodeNavbar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <>
        <Navbar />
        <DcodeNavbar />
        App
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Flex
          alignItems="center"
          textAlign="center"
          justifyContent="center"
          mb={40}
          flexDirection="column"
        >
          <div align="center">Found: {this.state.images.length} images</div>
          <ImageList images={this.state.images} />
        </Flex>
      </>
    );
  }
}
export default App;
