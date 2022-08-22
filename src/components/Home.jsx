import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { SingleProduct } from './SingleProduct';

faker.seed(100);

const Home = ({ cart, setCart }) => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    // image: faker.image.fashion(true),
    image: faker.image.food(600, 800, true)
  }));

  const [products] = useState(productsArray);

  // const [cart, setCart]=useState([])
  // console.log(productsArray);
  console.log(cart);

  return (
    <div className='productContainer'>
      {products.map((prod) => (
        <SingleProduct
          prod={prod}
          key={prod.id}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default Home;

// https://fakerjs.dev/
