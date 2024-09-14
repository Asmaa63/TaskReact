import React from 'react';
import { products } from "./ProductData"; 
import CounterComponent from './CounterComponent';
import './ProductDtataComponent.css';


function ProductDataComponent() {
  return (
    <div className="Product-container">
      {products.map((product) => (
        <div key={product.id} className="Product-card">
          <img src={product.img} alt={product.name} className="product-img" />
          <h2>{product.name}</h2>
          <h3>{product.category}</h3>
          <p>{product.description}</p>
          <span>{product.price} $</span>
          <CounterComponent/>
        </div>
      ))}
    </div>
  );
}

export default ProductDataComponent