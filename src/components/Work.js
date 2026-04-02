import React from "react";
import ecommerce_thumb from '../assets/images/ecommerce_thumb.png';
import school_thumb from '../assets/images/school_thumb.png';
import '../assets/styles/Work.css';

const projects = [
  {
    title: "EcoShop - Ecommerce System",
    description: "A highly scalable ecommerce platform focused on robust system design, featuring product management, shopping cart, and secure checkout processes.",
    technologies: ["React", "JavaScript"],
    liveLink: "https://ecommerce-system-us5a.vercel.app/shop",
    githubLink: "https://github.com/adityakamodiya",
    thumbnail: ecommerce_thumb
  },
  {
    title: "EduStream - School Website",
    description: "A modern educational portal with a clean UI and intuitive user experience, featuring dynamic course listings and interactive academic resources.",
    technologies: ["React", "JavaScript"],
    liveLink: "https://school-website-one-phi.vercel.app/",
    githubLink: "https://github.com/adityakamodiya/school-website",
    thumbnail: school_thumb
  }
];

const Work = () => {
  return (
    <div className="work-section animate-fade-in">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-image-container">
              <img src={project.thumbnail} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noreferrer" title="Live Demo">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" title="GitHub Repo">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
