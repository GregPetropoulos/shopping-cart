import React, { createContext,useState} from 'react'

export const CartCont= createContext()

 const CartContext = ({children}) => {
// Global State here
const [cart, setCart] = useState([]);

  return (
<CartCont.Provider value={{cart,setCart}}>
    {children}
</CartCont.Provider>
  )
}

export default CartContext