import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Stack, VStack } from '@chakra-ui/layout';
import React from 'react';
import styles from './dCodeNavbar.module.css';

const BarItems = ({ name, myhref }) => (
  <a href={myhref} className={styles.nav__link}>
    <i className={styles.nav__icon} />
    <span className="nav__text">{name}</span>
  </a>
);

const DcodeNavbar = () => (
  <>
    <nav className={styles.nav}>
      <BarItems name="Dashboard" myhref="/#" />
      <BarItems name="To-Do List" myhref="/nobackend" />
      <BarItems name="Landing Page" myhref="/myIndex" />
    </nav>
    <nav className={styles.navtop}>
      <BarItems name="Search API" myhref="/search-api" />
      <BarItems name="YouTube API" myhref="/youtube-api" />
      <BarItems name="Accordion" myhref="/accordion" />
    </nav>
  </>
);

export default DcodeNavbar;
