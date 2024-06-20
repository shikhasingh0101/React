import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import UserList from './components/UserList';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

