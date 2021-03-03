import Head from 'next/head';
import { Heading, Flex } from '@chakra-ui/react';
import PersonalList from '../components/PersonalList';
import Hero from '../components/chakraPro/HeroWithFeaturedLogos/Hero';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Flex flexDirection="column" alignItems="center" width="100%">
        <Heading textColor="blue.500">Here</Heading>

        <PersonalList />
      </Flex>
    </div>
  );
}
