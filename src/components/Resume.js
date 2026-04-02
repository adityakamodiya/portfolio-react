import React from 'react';
import '../assets/styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume-section animate-fade-in">
      <h2 className="section-title">Resume</h2>
      <div className="resume-container glass-card">
        <div className="resume-content">
          <div className="resume-icon">
            <i className="fa-solid fa-file-pdf"></i>
          </div>
          <div className="resume-info">
            <h3>Download My Resume</h3>
            <p>
              Looking for a detailed overview of my experience, skills, and education? 
              You can view or download my full resume here.
            </p>
            <div className="resume-actions">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary">
                <i className="fa-solid fa-eye"></i> View PDF
              </a>
              <a href="/resume.pdf" download="Aditya_Kamodiya_Resume.pdf" className="btn-secondary">
                <i className="fa-solid fa-download"></i> Download
              </a>
            </div>
            <p className="resume-note">
              * Note: Please ensure you place your 'resume.pdf' in the <code>public/</code> folder for these links to work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
