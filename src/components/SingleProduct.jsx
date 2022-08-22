import React from 'react';

export const SingleProduct = ({ prod, cart, setCart }) => {
  return (
    <div className='products'>
      <img src={prod.image} alt={prod.name} />
      <div className='productDesc'>
        <p style={{ fontWeight: 700 }}>{prod.name}</p>
        <p>{`$${prod.price.substring()}`}</p>
      </div>
      {cart.includes(prod) ? (
        <button
          className='add'
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}>
          Remove from Cart
        </button>
      ) : (
        <button
          className='add'
          onClick={() => {
            setCart([...cart, prod]);
          }}>
          Add to Cart
        </button>
      )}
    </div>
  );
};
