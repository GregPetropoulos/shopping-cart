import {useContext} from 'react';
import { Link } from 'react-router-dom';
import{CartCont} from '../context/CartContext';


const Header = () => {
const {cart}=useContext(CartCont)

  return (
    <div>
      <h2 className='header'>Shopping Cart</h2>
      <ul className='nav'>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        <li>
          <Link to='/cart'>Cart {cart.length}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
