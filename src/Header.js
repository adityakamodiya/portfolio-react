import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './CSS/Header.css'; // Import your CSS file
import './portfoluo.css'

function Header() {
  const [waveActive, setWaveActive] = useState(false);

  const handleClick = (e) => {
    setWaveActive(true);

    // Reset the wave effect after animation ends
    setTimeout(() => {
      setWaveActive(false);
    }, 1000); // Match the duration of the animation
  };

  return (
    <>
      <nav>
        <ul>
          <li className="nav-link" onClick={handleClick}>
            <Link to='/'><i className="fa-solid fa-house"></i></Link>
            <span className="tooltip">Home</span>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='about'><i className="fa-solid fa-user"></i></Link>
            <span className="tooltip">About</span>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='work'><i className="fa-solid fa-briefcase"></i></Link>
            <span className="tooltip">Work</span>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='qualification'><i className="fa-solid fa-graduation-cap"></i></Link>
            <span className="tooltip">Qualification</span>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='contact'><i className="fa-solid fa-address-book"></i></Link>
            <span className="tooltip">Contact</span>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='skills'><i className="fa-solid fa-layer-group"></i></Link>
            <span className="tooltip">Skills</span>
          </li>
        </ul>
      </nav>
      <div className="wave-effect-container">
        {waveActive && <div className="bright-out"></div>}
        {waveActive && <div className={`wave-effect`}></div>}
      </div>
    </>
  );
}

export default Header;
