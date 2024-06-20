import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ReviewForm = ({ productId }) => {
  const { addReview } = useContext(ProductContext);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Math.random(),
      author,
      content,
      rating: parseInt(rating)
    };
    addReview(newReview);
    setAuthor('');
    setContent('');
    setRating(5);
  };

  return (
    <div className="review-form">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Review</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
