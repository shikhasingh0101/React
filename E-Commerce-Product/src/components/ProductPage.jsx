import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductDetails from './ProductDetails';
import ProductReviews from './ProductReviews';
import ReviewForm from './ReviewForm';

const ProductPage = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className="product-page">
      <ProductDetails product={product} />
      <ProductReviews reviews={product.reviews} />
      <ReviewForm productId={product.id} />
    </div>
  );
};

export default ProductPage;
