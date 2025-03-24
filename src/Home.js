import React from 'react';
import image from './home_image.png';
import resume from './Images/Resume_Aditya.pdf';
import { Link } from 'react-router-dom';
import './CSS/Home.css'; // Import CSS styles

function Home() {
  return (
    <div id="wrapper">
      <div className="left-right">
        {/* Left: Profile Image */}
        <img src={image} alt="Aditya Kamodiya" />

        {/* Right: Name, Title & Buttons */}
        <div className="right">
          <div className="name">
            <h1>Aditya Kamodiya</h1>
            <p>Full Stack Developer</p>
          </div>
          <div className="buttons">
            <button>
              <a href={resume} download="Aditya_Kamodiya_Resume">Resume</a>
            </button>
            <button>
              <Link to="/Hire me">Hire me</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
