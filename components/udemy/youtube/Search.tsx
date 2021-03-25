import { Button } from '@chakra-ui/button';
import { FormLabel } from '@chakra-ui/form-control';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CardHeader, Label } from 'reactstrap';

const MySearch = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    search();
  }, [term]);
  const renderedResults = results.map((result) => (
    <Box w={['90%', '90%', '90%', '40%']}>
      <Box>
        <VStack spacing="10px">
          <Heading fontSize="lg" textAlign="center">
            {result.title}
          </Heading>{' '}
          <Text fontSize="sm" textAlign="center">
            {result.snippet}
          </Text>
        </VStack>
      </Box>
    </Box>
  ));
  return (
    <>
      <VStack spacing="15px">
        <Heading>Search</Heading>
        <FormLabel textAlign="center">Enter Search Term</FormLabel>
        <Input
          w={['60%', '50%', '50%', '20%']}
          variant="outline"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="whatsapp"
          variant="outline"
        >
          Search
        </Button>
        {renderedResults}
      </VStack>
    </>
  );
};

export default MySearch;
// en.wikipedia.ord/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming
