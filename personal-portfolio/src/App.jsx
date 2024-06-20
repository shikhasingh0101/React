// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
