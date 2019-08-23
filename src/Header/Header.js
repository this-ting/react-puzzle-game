import React, { Component } from 'react';
import { link, NavLink } from 'react-router-dom';

const Header = () => {

  return(
    
    <ul>
      <li><NavLink to="/">Game</NavLink></li>
      <li><NavLink to="/ranking">Ranking</NavLink></li>
    </ul>
  )

}


export default Header;