import { UpDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { AlertDialogHeader } from '@chakra-ui/modal';
import { Select, SelectField } from '@chakra-ui/select';
import { Textarea } from '@chakra-ui/textarea';
import { Text } from '@chakra-ui/react';

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => (
    <>
      <Flex flexDirection="column" bg="gray.50" borderRadius="2xl" p={10}>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          m={5}
        >
          <UpDownIcon cursor="pointer" />
          <Heading fontSize={[20, 25, 30]}>{item.title}</Heading>
        </Flex>
        <Flex flexDirection="column">
          <Box alignItems="left" textAlign="left">
            <Text>{item.content}</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  ));

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
