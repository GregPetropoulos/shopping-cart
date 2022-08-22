import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
          <Route
            path='/cart'
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
