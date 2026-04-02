import React from 'react';
import avatar from '../assets/images/developer_avatar.png';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div className="hero-container animate-fade-in">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-subtitle">Hello, I'm</h2>
          <h1 className="hero-title text-gradient">ADITYA KAMODIYA</h1>
          <p className="hero-description">
            A passionate <span className="highlight">Full Stack Developer</span> crafting elegant, 
            high-performance web solutions with modern technologies. 
            Turning complex problems into simple, beautiful digital experiences.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Let's Talk</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/adityakamodiya" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            <a href="https://linkedin.com/in/adityakamodiya" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:adityakamodiya@gmail.com"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>
          <img src={avatar} alt="Aditya Avatar" className="hero-avatar" />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Home;
