import React from 'react';
import './Projects.css';  // Assuming you have styling for the Projects page

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      
      <ol className="project-list">  {/* Changed to an ordered list */}
        <li className="project">
          <img src="/project1.jpg" alt="Project 1" className="project-image" />
          <h2>Interactive Web App</h2>
          <p>Developed an interactive web app using JavaScript for tasks like date calculations and prime number generation, and designed a responsive UI with custom CSS for an engaging user experience. Additionally, built a book library system to manage and check out books by ISBN, enhancing my skills in DOM manipulation and data management.</p>
        </li>

        <li className="project">
          <img src="/project2.jpg" alt="Project 2" className="project-image" />
          <h2>Real Estate Website</h2>
          <p>Showcasing real estate listings for properties in Ontario, Canada. The layout includes a navigation bar on the left for Home, Active Listings, Contact, and Sitemap, while the main content highlights properties for sale in Windsor, Sudbury, and Toronto with descriptions and images.</p>
        </li>

        <li className="project">
          <img src="/project3.jpg" alt="Project 3" className="project-image" />
          <h2>Resort Website</h2>
          <p>The Pacific Trails Resort website highlights luxury accommodations on the California coast, featuring yurts, hiking, kayaking, and other nature activities. Visitors can browse packages and easily make reservations, with a clean, inviting layout and scenic imagery.</p>
        </li>
      </ol>
    </div>
  );
};

export default Projects;
