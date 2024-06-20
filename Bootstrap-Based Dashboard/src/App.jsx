import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Settings from './components/Settings'; 
import NotFound from './components/NotFound'; 

import './App.css';

const App = () => (
  <Router>
    <div className="d-flex">
      <Sidebar />
      <div className="main-content">
        <TopNavbar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
