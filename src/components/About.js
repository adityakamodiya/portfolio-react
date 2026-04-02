import React from 'react';
import '../assets/styles/About.css';

const About = () => {
  return (
    <div className="about-section animate-fade-in">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image-container">
          <div className="about-image-decoration"></div>
          <div className="about-image-glass">
            <i className="fa-solid fa-user-astronaut"></i>
          </div>
        </div>
        <div className="about-text-container glass-card">
          <h3>Who I Am</h3>
          <p>
            I'm <span className="highlight-text">Aditya Kamodiya</span>, a result-oriented 
            <span className="highlight-text"> Full Stack Developer</span> based in India. 
            I specialize in building robust web applications using the 
            <span className="highlight-text"> MERN stack</span> and modern cloud technologies.
          </p>
          <p>
            With a focus on performance and user experience, I bridge the gap between 
            complex backend logic and intuitive frontend interfaces. I'm passionate about 
            writing clean, maintainable code and staying updated with the latest 
            industry trends.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing 
            to open-source projects, or designing innovative digital solutions that 
            solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
