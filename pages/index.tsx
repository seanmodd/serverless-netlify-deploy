import Head from 'next/head';
import { Heading, Flex } from '@chakra-ui/react';
import PersonalList from '../components/PersonalList';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDirection="column" alignItems="center" width="100%">
        <Heading textColor="blue.500">Here</Heading>

        <PersonalList />
      </Flex>
    </div>
  );
}
