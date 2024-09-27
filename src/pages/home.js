import React from 'react';
import { Link } from 'react-router-dom';  // Import Link to navigate between pages
import './Home.css';  // Assuming you will add some styles for the home page

const Home = () => {
  return (
    <div className="home">
      {/* Welcome Message */}
      <h1>Welcome to My Portfolio</h1>
      
      {/* Mission Statement */}
      <p>
        I am a passionate web developer and designer, committed to crafting innovative 
        solutions and delivering exceptional user experiences. Explore my projects, learn more about me, 
        or get in touch to collaborate on exciting projects.
      </p>

      {/* Buttons/Links to Other Pages */}
      <div className="home-links">
        <Link to="/about" className="home-button">About Me</Link>
        <Link to="/projects" className="home-button">My Projects</Link>
        <Link to="/contact" className="home-button">Contact Me</Link>
      </div>
    </div>
  );
};

export default Home;
