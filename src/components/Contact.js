import React from 'react';
import '../assets/styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-section animate-fade-in">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info glass-card">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me for any inquiries or collaborations!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <span>Email</span>
                <p>adityakamodiya@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <span>Location</span>
                <p>Jaipur, India</p>
              </div>
            </div>
            <div className="contact-detail">
              <i className="fa-brands fa-linkedin"></i>
              <div>
                <span>LinkedIn</span>
                <p><a href="https://linkedin.com/in/adityakamodiya" target="_blank" rel="noreferrer">Aditya Kamodiya</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form glass-card">
          <h3>Send Me a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-row">
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
