
import React from 'react';
import './Footer.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';



function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/shikhasingh0101" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://x.com/ShikhaS57729464" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/_shikha_singh_0118/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/shikha-singh-20460a283/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
