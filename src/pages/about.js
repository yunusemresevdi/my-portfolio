import React from 'react';
import './About.css'; // Add CSS to style the page

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src="/profilepic.png" alt="Yunus Emre Sevdi" className="profile-pic" />
      <p>
        Hello, I'm Yunus Emre Sevdi, a passionate web developer based in Toronto. I love creating websites and working on projects that bring ideas to life.
      </p>
       {/* Add the link to the resume PDF */}
       <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
        Download My Resume (PDF)
      </a>
    </div>
  );
};

export default About;
