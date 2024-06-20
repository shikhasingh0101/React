import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;
