// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


function HomePage() {
  const products = [
    { id: 1, name: 'T-Shirt', price: 199.23, image: '/images/tshirt2.jpeg' },
    { id: 2, name: 'Sneakers', price: 430.99, image: '/images/sneakers.jpeg' },
    { id: 3, name: 'Backpack', price: 270.99, image: '/images/backpack.jpeg' },
    { id: 4, name: 'Smarphone', price: 10000.0, image: '/images/smartphone.jpeg'},
    { id: 5, name: 'Laptop', price: 50000.0, image: '/images/laptop.jpeg'},
    { id: 6, name: 'Laptop', price: 7000.0, image: '/images/laptop.jpeg'},
  ];

  return (
    <div className="container">
          {/* NAVBAR */}
      <nav>
        <div className='navlogo'>Flipkart</div>
        <div className='navcart'>
          <FaShoppingCart size={24} color="yellow" />
        </div>
      </nav>

      <h2 style={{paddingLeft:'0.5rem'}}>All Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', borderRadius: '5px' }}
            />
            <h4>{product.name}</h4>
            <p>Rs/-{product.price}</p>
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
