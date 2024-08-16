import React from 'react';
import './CSS/Contact.css'; // Import the CSS file
import './CSS/Home.css'; // Import the CSS file
import { useEffect } from 'react';
const Contact = () => {
  

  return (
    <div className="contactContainer">
      <h1>Contact Me</h1>
      
      <section className="contactForm">
        <h2>Send Me a Message</h2>
        <form>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />

          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' rows='5' required></textarea>

          <button type='submit'>Send Message</button>
        </form>
      </section>
      
      <section className="contactInfo">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:adityakamodiya@gmail.com">adityakamodiya@gmail.com</a></p>
        <p>Phone: +123 456 7890</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/aditya-kamodiya-9b7a13240/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/adityakamodiya" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </section>
    </div>
  );
};

export default Contact;
