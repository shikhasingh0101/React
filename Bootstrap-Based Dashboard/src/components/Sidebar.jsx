
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <Nav.Item>
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/users">Users</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
      </Nav.Item>
    </div>
  </Nav>
);

export default Sidebar;
