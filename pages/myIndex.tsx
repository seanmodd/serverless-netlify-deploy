import Head from 'next/head';
import { Heading, Flex, Button, Container } from '@chakra-ui/react';
import PersonalList from '../components/PersonalList';
import Hero from '../components/chakraPro/HeroWithFeaturedLogos/Hero';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import Newsletter from '../components/chakraPro/NewsletterWithDarkBg/Newsletter';

export default function myIndex() {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />

      <Newsletter />

      <Heading textColor="blue.500">Here</Heading>

      <PersonalList />
    </>
  );
}
