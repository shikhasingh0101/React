
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
          {/* <li><Link to="/resume">Resume</Link></li> */}
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
