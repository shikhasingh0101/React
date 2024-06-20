import React from 'react';

const ProductReviews = ({ reviews }) => {
  return (
    <div className="product-reviews">
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p><strong>{review.author}</strong> ({review.rating} stars)</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet. Be the first to review this product!</p>
      )}
    </div>
  );
};

export default ProductReviews;
