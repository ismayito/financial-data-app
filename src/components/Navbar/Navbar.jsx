import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import './Component.css';

const Navbar = () => (
  <div className="links">
    <NavLink to="/">
      <Header />
    </NavLink>
    {/* <NavLink to="/details">Details</NavLink> */}
  </div>
);

export default Navbar;
