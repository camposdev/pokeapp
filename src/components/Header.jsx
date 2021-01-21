import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <h1>Header</h1>
    <Link to="/">Home</Link>
    <Link to="/favorites">Favorites</Link>
  </>
);

export default Header;
