import React from 'react';
import './CSS/Skills.css'; // Make sure this is correctly linked

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>

      <div className="skills-content">
        <div className="skill-category">
          <h2>Technical Skills</h2>
          <ul>
            <li><span>Languages:</span> Java, JavaScript</li>
            <li><span>Front-End:</span> HTML, CSS, React, Bootstrap</li>
            <li><span>Back-End:</span> Node.js, Java, Servlets, JSP, Spring Boot</li>
            <li><span>Databases:</span> MongoDB, MySQL</li>
            <li><span>Tools & Technologies:</span> GitHub, CodeSandbox, Postman, Cloudinary, Firebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
