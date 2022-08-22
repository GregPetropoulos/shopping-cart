import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <h2 className='header'>Shopping Cart</h2>
      <ul className='nav'>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
