// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();

  const productData = {
    1: {
      name: 'T-Shirt',
      description: 'Comfortable cotton T-Shirt.',
      price: 199.99,
      image: '/images/tshirt2.jpeg',
    },
    2: {
      name: 'Sneakers',
      description: 'Stylish and comfy sneakers.',
      price: 430.99,
      image: '/images/sneakers.jpeg',
    },
    3: {
      name: 'Backpack',
      description: 'Durable backpack for everyday use.',
      price: 270.99,
      image: '/images/backpack.jpeg',
    },
    4: {
      name: 'Smartphone',
      description: 'Daily usefull smartphone which can change the world.',
      price: 10000.0,
      image: '/images/smartphone.jpeg',
    },
    5: {
      name: 'Laptop',
      description: 'Laptop is usefull for students and officers.',
      price: 50000.0,
      image: '/images/laptop.jpeg',
    },
  };

  const product = productData[id] || {
    name: 'Unknown Product',
    description: 'No description available.',
    price: 0,
    image: '',
  };

  return (
    <div className="container2">
      <h2>{product.name}</h2>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '300px', borderRadius: '5px' }}
        />
      )}
      <p>{product.description}</p>
      <h4>Price: Rs/-{product.price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
