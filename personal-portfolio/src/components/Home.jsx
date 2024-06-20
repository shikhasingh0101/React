
import React from 'react';
import './Home.css';
import profileImage from '../assets/WhatsApp Image 2024-02-24 at 23.53.09.jpeg'; // Correct the path as necessary

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="text">
          <h1>Hi, I'm <span className="highlight">Shikha Singh</span></h1>
          <h2>Btech-CSE</h2>
          <h3>Student at Itm skills university</h3>
        </div>
        <div className="image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Home;
