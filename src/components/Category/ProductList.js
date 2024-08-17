import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <p>${product.rating}</p>
          
        </div>
      ))}
    </div>
  );
};

export default ProductList;
