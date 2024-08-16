// src/Qualifications.js

import React from 'react';
import './CSS/Qualification.css'; // Import the CSS file

const Qualification = () => {
  return (
    <div id='Qualification' className='qualificationsContainer'>
      <h1>Qualifications</h1>
      
      <section className='education'>
        <h2>Educational Background</h2>
        <ul>
          <li>
            <strong>B.Tech in Information Technology</strong><br />
            Aray College of Engineering, 2021-Present
          </li>
          <li>
            <strong>High School</strong><br />
            Government School, Jaipur, 2021
          </li>
        </ul>
      </section>
      
      <section className='skills'>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> Java, JavaScript</li>
          <li><strong>Front-End:</strong> HTML, CSS, React</li>
          <li><strong>Back-End:</strong> Node.js, Java, Servlets, JSP, Spring Boot</li>
          <li><strong>Databases:</strong> MongoDB, MySQL</li>
          <li><strong>Tools & Technologies:</strong> Postman, Cloudinary, Firebase</li>
        </ul>
      </section>
      
      <section className='experience'>
        <h2>Professional Experience</h2>
        <ul>
          <li>
            <strong>Full Stack Developer Intern</strong><br />
            Full Stack Learning, August 2023 - December 2023<br />
            - Worked on the development of full-stack web applications, leveraging modern web technologies such as HTML, CSS, JavaScript, React for front-end development, and Node.js for back-end services.<br />
            - Designed and implemented RESTful APIs using Node.js and Express, which communicated with MongoDB for database operations.<br />
            - Collaborated with cross-functional teams to ensure seamless integration of front-end and back-end components.<br />
            - Participated in code reviews, debugging, and performance optimization to enhance application functionality and user experience.<br />
            - Developed responsive user interfaces using React, ensuring compatibility across different devices and browsers.<br />
            - Implemented user authentication and authorization features with Firebase, ensuring secure access to application resources.<br />
            - Utilized Cloudinary for image management and Postman for API testing and documentation.<br />
          </li>
          <li>
            <strong>Trainee</strong><br />
            DZone, March 2024 - Present<br />
            - Working with Java on various projects, focusing on back-end development and enterprise-level applications.<br />
            - Gaining experience with Java-based frameworks and technologies, contributing to the development and maintenance of scalable applications.<br />
            - Involved in debugging, testing, and optimizing Java applications to improve performance and reliability.<br />
          </li>
        </ul>
      </section>
      
      <section className='achievements'>
        <h2>Achievements and Awards</h2>
        <ul>
          <li><strong>HackerRank Problem Solving:</strong> 5 stars and Gold badge in Java. Check my profile <a href="https://www.hackerrank.com/adityakamodiya" target="_blank" rel="noopener noreferrer">here</a>.</li>
          <li><strong>HackerRank Certifications:</strong> CSS, JavaScript, React</li>
        </ul>
      </section>
      
      <section className='projects'>
        <h2>Portfolio or Personal Projects</h2>
        <ul>
          <li className='projectItem'>
            <strong>Resort API</strong><br />
            <a href="https://github.com/yourusername/resort-api" target="_blank" rel="noopener noreferrer">GitHub Link</a><br />
            Developed a RESTful API using Node.js and MongoDB. Integrated Firebase authentication and deployed on Render.
          </li>
          <li className='projectItem'>
            <strong>File Uploader</strong><br />
            <a href="https://github.com/yourusername/file-uploader" target="_blank" rel="noopener noreferrer">GitHub Link</a><br />
            Created a form and admin panel with React and MongoDB. Implemented file uploading with Cloudinary.
          </li>
          <li className='projectItem'>
            <strong>School Website Frontend</strong><br />
            <a href="https://github.com/yourusername/school-website-frontend" target="_blank" rel="noopener noreferrer">GitHub Link</a><br />
            Developed the frontend of a school website using HTML, CSS, and React. Designed responsive and interactive UI elements to enhance user experience.
          </li>
        </ul>
      </section>
      
      <section className='certifications'>
        <h2>Certifications and Continuing Education</h2>
        <ul>
          <li>
            <strong>React Certification</strong>, HackerRank, August 2024<br />
            <a href="https://www.hackerrank.com/certificates/your-react-certification-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </li>
          <li>
            <strong>JavaScript Fundamentals</strong>, Coursera, June 2023<br />
            <a href="https://www.coursera.org/account/accomplishments/certificate/your-javascript-certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </li>
          <li>
            <strong>CSS Certification</strong>, HackerRank, August 2024<br />
            <a href="https://www.hackerrank.com/certificates/your-css-certification-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </li>
          <li>
            <strong>JavaScript Certification</strong>, HackerRank, August 2024<br />
            <a href="https://www.hackerrank.com/certificates/your-javascript-certification-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Qualification;
