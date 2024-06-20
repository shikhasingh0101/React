import React from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <BlogList />
      </main>
    </div>
  );
};

export default App;
