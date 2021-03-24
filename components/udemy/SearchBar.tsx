import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Stack } from '@chakra-ui/layout';
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <Flex d="flex" flexDirection="column" alignItems="center" mt={59}>
          <Heading mt={50} mb={15}>
            The Image API App!
          </Heading>

          <Stack
            w="300px"
            justifyContent="align"
            alignItems="center"
            spacing={3}
          >
            <form onSubmit={this.onFormSubmit} align="center">
              <Input
                color="pink.500"
                variant="outline"
                placeholder="Search for images..."
                value={this.state.term}
                onChange={(e) =>
                  this.setState({ term: e.target.value.toLowerCase() })
                }
              />
              <Button
                justifyContent="center"
                alignItems="center"
                w="200px"
                colorScheme="whatsapp"
                type="submit"
                mt={5}
                mb={5}
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
