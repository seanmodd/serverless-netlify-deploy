import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { Button, IconButton } from '@chakra-ui/button';
import { FormLabel } from '@chakra-ui/form-control';
import {
  ArrowForwardIcon,
  Icon,
  InfoIcon,
  Search2Icon,
  SearchIcon,
} from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import {
  Box,
  Flex,
  Heading,
  HStack,
  LinkBox,
  Text,
  VStack,
} from '@chakra-ui/layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CardHeader, Label } from 'reactstrap';

const hoverStyle = {
  background: '#0d00ff',
  color: '#ffff00',
  transition: 'all 0.6s ease-out',
  boxShadow: '7px 7px 7px 7px  rgba(3, 73, 223, 0.2)',
  textShadow: '1.5px 1px #ff00ae',
};
const hoverStyleIcon = {
  color: '#0d00ff',
  transition: 'all 0.6s ease-out',
};

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
    <>
      <LinkBox
        as="article"
        w={['90%', '90%', '90%', '40%']}
        bg={mode('gray.50', 'gray.900')}
        p={10}
        _hover={hoverStyle}
        transition="ease-out 0.7s"
        borderRadius="2xl"
      >
        <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
          <Box>
            <VStack spacing="10px">
              <HStack spacing="10px">
                <Heading fontSize="lg" textAlign="center" key={result.pageid}>
                  {result.title}
                </Heading>

                <Search2Icon />
              </HStack>
              <Text fontSize="sm" textAlign="center">
                <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
              </Text>
            </VStack>
          </Box>
        </a>
      </LinkBox>
    </>
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
