import React from 'react';
import './CSS/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="form-container">
        <h2>Send Me a Message</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" required />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea rows="5" required></textarea>
        </div>

        <div className="button-container">
          <button type="submit">Send Message</button>
        </div>
      </div>

      <div className="info-container">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:adityakamodiya@gmail.com">adityakamodiya@gmail.com</a></p>
        <p>Phone: +123 456 7890</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/aditya-kamodiya-9b7a13240/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/adityakamodiya" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </div>
    </div>
  );
};

export default Contact;
