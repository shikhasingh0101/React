import React, { createContext, useState } from 'react';


export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({
    id: 1,
    name: 'Product Name',
    description: 'This is a product description.',
    price: 99.99,
    reviews: [
      { id: 1, author: 'John Doe', content: 'Great product!', rating: 5 },
      { id: 2, author: 'Jane Smith', content: 'Not bad.', rating: 4 }
    ]
  });

  // Function to add a new review
  const addReview = (review) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      reviews: [...prevProduct.reviews, review]
    }));
  };

  return (
    <ProductContext.Provider value={{ product, addReview }}>
      {children}
    </ProductContext.Provider>
  );
};
