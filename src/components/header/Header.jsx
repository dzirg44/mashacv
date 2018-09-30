import React from 'react';
import logo from './image.jpg';

const Header = () => (
  <header>
    <img src={logo} alt="logo" width="200px" />
    <h2>Mariia Neymorovets</h2>
    <h3>PHP Back-end developer</h3>
  </header>
);

export { Header as default };
