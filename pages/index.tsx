import Head from 'next/head';
import { Heading, Flex, Button } from '@chakra-ui/react';

import PersonalList from '../components/PersonalList';
import Hero from '../components/chakraPro/HeroWithFeaturedLogos/Hero';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import Newsletter from '../components/chakraPro/NewsletterWithDarkBg/Newsletter';
import Footer from '../components/chakraPro/FooterWithFourColumns/Footer';

export default function Home() {
  return (
    <>
      <Flex flexDirection="column" className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero />
        <Newsletter />
        <Flex flexDirection="column" alignItems="center" width="100%">
          <Heading textColor="blue.500">Here</Heading>

          <PersonalList />
        </Flex>
      </Flex>
    </>
  );
}
