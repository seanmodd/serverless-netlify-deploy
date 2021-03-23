import Head from 'next/head';
import { Heading, Flex, Button, Container } from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import PersonalList from '../components/PersonalList';
import Hero from '../components/chakraPro/HeroWithFeaturedLogos/Hero';
import Navbar from '../components/chakraPro/NavbarWithRightCta/Navbar';
import Newsletter from '../components/chakraPro/NewsletterWithDarkBg/Newsletter';
import { MyFlex } from '../components/traversy/Styled';

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

      <Flex
        flexDirection="column"
        alignItems="center"
        bg={mode('gray.50', 'gray.800')}
        pb={19}
      >
        <Heading color={mode('blue.500', 'gray.50')}>Here</Heading>
        <PersonalList />
      </Flex>
    </>
  );
}
