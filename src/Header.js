import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./CSS/Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <h1>Aditya's Portfolio</h1>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setIsMobile(!isMobile)}>
        <i className={`fa-solid ${isMobile ? "fa-xmark" : "fa-bars"}`}></i>
      </div>

      {/* Navigation Links */}
      <nav className={isMobile ? "nav-links mobile-active" : "nav-links"}>
        <ul>
          <li className="nav-item">
            <Link to='/'><i className="fa-solid fa-house"></i> Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/about'><i className="fa-solid fa-user"></i> About</Link>
          </li>
          <li className="nav-item">
            <Link to='/work'><i className="fa-solid fa-briefcase"></i> Work</Link>
          </li>
          <li className="nav-item">
            <Link to='/qualification'><i className="fa-solid fa-graduation-cap"></i> Qualification</Link>
          </li>
          <li className="nav-item">
            <Link to='/contact'><i className="fa-solid fa-address-book"></i> Contact</Link>
          </li>
          <li className="nav-item">
            <Link to='/skills'><i className="fa-solid fa-layer-group"></i> Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
