import React from 'react';
import '../assets/styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: "fa-brands fa-html5" },
        { name: "CSS", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "React", icon: "fa-brands fa-react" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "Express", icon: "fa-solid fa-server" },
        { name: "MongoDB", icon: "fa-solid fa-database" },
        { name: "MySQL", icon: "fa-solid fa-database" },
        { name: "Supabase", icon: "fa-solid fa-cloud-bolt" },
        { name: "Firebase", icon: "fa-solid fa-fire" },
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: "fa-brands fa-github" },
        { name: "Postman", icon: "fa-solid fa-paper-plane" },
        { name: "Vercel", icon: "fa-solid fa-triangle-exclamation" }, // triangle as placeholder for vercel
        { name: "Render", icon: "fa-solid fa-cube" },
        { name: "Cloudinary", icon: "fa-solid fa-image" },
      ]
    }
  ];

  return (
    <div className="skills-section animate-fade-in">
      <h2 className="section-title">My Tech Stack</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card glass-card">
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
