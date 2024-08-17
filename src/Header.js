import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './CSS/Header.css'; // Make sure to import your CSS file
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
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='about'><i className="fa-solid fa-user"></i></Link>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='work'><i className="fa-solid fa-briefcase"></i></Link>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='qualification'><i className="fa-solid fa-graduation-cap"></i></Link>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='contact'><i className="fa-solid fa-address-book"></i></Link>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <Link to='skills'><i className="fa-solid fa-layer-group"></i></Link>
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
