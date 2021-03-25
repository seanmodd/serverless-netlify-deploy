import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { BellIcon, StarIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Heading, Stack, VStack } from '@chakra-ui/layout';
import React from 'react';
import styles from './MyNavbar.module.css';

const NavbarItem = ({ name, myhref, icon }) => (
  <li className="nav-item">
    <a href={myhref} className="nav-link">
      {icon}
      <Heading
        fontSize="small"
        textAlign="center"
        width={{ base: '100%', sm: '100', md: '100%' }}
      >
        {name}
      </Heading>
    </a>
  </li>
);

const GroupNavbars = () => (
  <>
    <NavbarItem name="To-Do List" myhref="/nobackend#" icon=<StarIcon /> />
    <NavbarItem name="Landing Page" myhref="/myIndex" icon=<StarIcon />/>
    <NavbarItem name="Search API" myhref="/search-api" icon=<StarIcon />/>
    <NavbarItem name="YouTube API" myhref="/youtube-api" icon=<StarIcon />/>
    <NavbarItem name="Home" myhref="/#" />
  </>
);

const MyNavbar = () => (
  <>
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="#" className="nav-link">
            <span className="link-text logo-text">Senpex</span>
          </a>
        </li>
        <GroupNavbars />
      </ul>
    </nav>
  </>
);

export default MyNavbar;
