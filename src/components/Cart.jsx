import { useState, useEffect } from 'react';
import { SingleProduct } from './SingleProduct';

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    // Using the reduce method to handle the total price as it changes in the cart
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 18 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 18 }}>
        <p>Total US$ {total}</p>
        <div className='productContainer'>
          {cart.map((prod) => (
            <SingleProduct
              prod={prod}
              key={prod.id}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </span>
    </div>
  );
};

export default Cart;
