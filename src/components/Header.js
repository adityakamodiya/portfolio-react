import React, { useState, useEffect } from 'react';
import '../assets/styles/Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: 'fa-house', id: 'home' },
    { name: 'About', icon: 'fa-user', id: 'about' },
    { name: 'Skills', icon: 'fa-layer-group', id: 'skills' },
    { name: 'Work', icon: 'fa-briefcase', id: 'work' },
    { name: 'Experience', icon: 'fa-graduation-cap', id: 'qualification' },
    { name: 'Contact', icon: 'fa-address-book', id: 'contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">
            <span className="logo-text">ADITYA</span>
            <span className="logo-dot">.</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setIsMobile(!isMobile)}>
          <i className={`fa-solid ${isMobile ? "fa-xmark" : "fa-bars-staggered"}`}></i>
        </div>

        {/* Navigation Links */}
        <nav className={isMobile ? "nav-links mobile-active" : "nav-links"}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a href={`#${link.id}`} onClick={() => setIsMobile(false)}>
                  <i className={`fa-solid ${link.icon}`}></i>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
