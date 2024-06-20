import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductPage from './components/ProductPage';
import './index.css';

const App = () => {
  return (
    <ProductProvider>
      <ProductPage />
    </ProductProvider>
  );
};

export default App;
