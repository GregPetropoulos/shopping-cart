import { useState, useEffect,useContext } from 'react';
import { SingleProduct } from './SingleProduct';
import{CartCont} from '../context/CartContext'

const Cart = () => {
  const [total, setTotal] = useState();
  const{cart}=useContext(CartCont)

  useEffect(() => {
    // Using the reduce method to handle the total price as it changes in the cart
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 18 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 18 }}>
        <p>Total US ${total}</p>
        <div className='productContainer'>
          {cart.map((prod) => (
            <SingleProduct
              prod={prod}
              key={prod.id}
            />
          ))}
        </div>
      </span>
    </div>
  );
};

export default Cart;
