import React from "react";
import '../assets/styles/Qualification.css';

const Qualification = () => {
  const education = [
    {
      title: "B.Tech in Information Technology",
      institution: "Arya College of Engineering",
      date: "2021 - 2025",
      description: "Focusing on software engineering, data structures, and web technologies."
    },
    {
      title: "High School (Science)",
      institution: "Government School, Jaipur",
      date: "2021",
      description: "Completed with a strong foundation in Mathematics and Physics."
    }
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Intellarix",
      date: "Feb 2026 - March 2026",
      description: "Working on web and mobile applications using React and React Native (Expo), focusing on scalable APIs and smooth integration."
    },
    {
      title: "Associate Software Engineer Intern",
      company: "CPARSEC",
      date: "Jun 2025 - Jan 2026",
      description: "Developed React-based dashboards and performed API testing for 50+ endpoints, along with automation testing."
    },
    {
      title: "Full Stack Developer (Trainee & Intern)",
      company: "Full Stack Learning",
      date: "Dec 2024 - Apr 2025",
      description: "Built full-stack applications using React, Node.js, and MongoDB. Worked on projects like a school website and REST APIs."
    }
  ];

  return (
    <div className="qualification-section animate-fade-in">
      <h2 className="section-title">My Journey</h2>
      <div className="qualification-container">
        <div className="qualification-column">
          <h3 className="column-title"><i className="fa-solid fa-graduation-cap"></i> Education</h3>
          <div className="timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <span className="timeline-date">{item.date}</span>
                <h4>{item.title}</h4>
                <p className="institution">{item.institution}</p>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="qualification-column">
          <h3 className="column-title"><i className="fa-solid fa-briefcase"></i> Experience</h3>
          <div className="timeline">
            {experience.map((item, index) => (
              <div key={index} className="timeline-item glass-card">
                <div className="timeline-dot"></div>
                <span className="timeline-date">{item.date}</span>
                <h4>{item.title}</h4>
                <p className="company">{item.company}</p>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
