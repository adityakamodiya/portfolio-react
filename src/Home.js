import React, { useEffect } from 'react';
import dummy from './dummy.jpeg';
import image from './home_image.png';
import resume from './Images/Resume_-_Aditya_Kamodiya_Latest[1].PDF';
import { Link } from 'react-router-dom';
import './CSS/Home.css'; // Import the CSS file for the styles

function Home() {
 

  return (
    <>
      <div id="wrapper">
        <div className="left-right">
          <img src={image} alt="Home" />
          <div className="left"></div>

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
    </>
  );
}

export default Home;
