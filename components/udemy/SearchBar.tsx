import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange(event) {
    const e = event.target.value;
    console.log(e);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <>
        <Flex d="flex" flexDirection="column" alignItems="center" my={100}>
          <Heading mt={50} mb={5}>
            The Image API App!
          </Heading>

          <Stack w="30%" justifyContent="align" alignItems="center" spacing={3}>
            <form onSubmit={this.onFormSubmit} align="center">
              <Input
                my={3}
                variant="outline"
                placeholder="Search for images..."
                onChange={this.onInputChange}
              />
              <Input
                color="pink.500"
                variant="outline"
                placeholder="Search AGAIN for images..."
                value={this.state.term}
                onChange={(e) =>
                  this.setState({ term: e.target.value.toLowerCase() })
                }
              />
              <Button
                justifyContent="center"
                alignItems="center"
                w="25%"
                colorScheme="whatsapp"
                type="submit"
                my={5}
              >
                Submit
              </Button>
            </form>
          </Stack>
        </Flex>
      </>
    );
  }
}
export default SearchBar;
