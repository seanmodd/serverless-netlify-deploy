import { FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading } from '@chakra-ui/layout';
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

  return (
    <>
      <Heading mb={5}>Search</Heading>
      <Flex mb={10} pb={10} flexDirection="column">
        <FormLabel textAlign="center">Enter Search Term</FormLabel>
        <Input
          variant="outline"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
      </Flex>
    </>
  );
};

export default MySearch;
// en.wikipedia.ord/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming
