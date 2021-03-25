import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex, Heading, Stack, VStack } from '@chakra-ui/layout';
import React from 'react';
import styles from './dCodeNavbar.module.css';

const DcodeNavbar = () => (
  <>
    <nav className={styles.nav}>
      <a href="#" className={styles.nav__link}>
        <i className={styles.nav__icon}>dashboard</i>
        <span className="nav__text">Dashboard</span>
      </a>
      <a href="#" className={styles.nav__link}>
        <i className={styles.nav__icon}>person</i>
        <span className={styles.nav__text}>Profile</span>
      </a>
      <a href="#" className={styles.nav__link}>
        <i className={styles.nav__icon}>devices</i>
        <span className={styles.nav__text}>Devices</span>
      </a>
      <a href="#" className={styles.nav__link}>
        <i className={styles.nav__icon}>lock</i>
        <span className={styles.nav__text}>Privacy</span>
      </a>
      <a href="#" className={styles.nav__link}>
        <i className={styles.nav__icon}>settings</i>
        <span className={styles.nav__text}>Settings</span>
      </a>
    </nav>
  </>
);

export default DcodeNavbar;
