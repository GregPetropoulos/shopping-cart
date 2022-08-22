import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import CartContext from './context/CartContext';

function App() {
  return (
    <CartContext>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </div>
      </Router>
    </CartContext>
  );
}

export default App;
