import React from "react";
import '../assets/styles/HireMe.css';

const HireMe = () => {
  const services = [
    {
      title: "Front-End Development",
      description: "I specialize in crafting responsive and interactive user interfaces using modern front-end technologies like React and Tailwind CSS.",
      icon: "fa-solid fa-code",
      features: ["Responsive Design", "Interactive UI", "State Management"]
    },
    {
      title: "MERN Stack Solutions",
      description: "Building robust, scalable full-stack applications with MongoDB, Express, React, and Node.js for high-performance results.",
      icon: "fa-solid fa-layer-group",
      features: ["RESTful APIs", "Database Design", "Authentication"]
    },
    {
      title: "Cloud & Deployment",
      description: "Seamlessly deploying and managing applications on modern cloud platforms like Vercel, Render, and Firebase.",
      icon: "fa-solid fa-cloud-arrow-up",
      features: ["CI/CD Pipelines", "BaaS Integration", "Media Management"]
    }
  ];

  return (
    <div className="hire-me-section animate-fade-in">
      <h2 className="section-title">Why Hire Me?</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item glass-card">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx}><i className="fa-solid fa-check"></i> {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="hire-cta">
        <h3>Got a project in mind?</h3>
        <p>Let's collaborate and turn your ideas into reality!</p>
        <a href="#contact" className="btn-primary">Get In Touch</a>
      </div>
    </div>
  );
};

export default HireMe;
