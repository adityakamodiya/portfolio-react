import React, { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Qualification from './components/Qualification'
import Resume from './components/Resume'
import Contact from './components/Contact'
import HireMe from './components/HireMe'
import './index.css'

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.classList.add('trail');
      document.body.appendChild(trail);

      // Set the position of the trail element
      trail.style.left = `${e.pageX - 7.5}px`; // Center the circle on the cursor
      trail.style.top = `${e.pageY - 7.5}px`;

      // Remove the trail element after the animation ends
      setTimeout(() => {
        trail.remove();
      }, 400); // Duration matches the animation length
    };

    // Attach the event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="qualification">
          <Qualification />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="hire-me">
          <HireMe />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
        <p>© {new Date().getFullYear()} Aditya Kamodiya Portfolio. Built with React.</p>
      </footer>
    </div>
  )
}

export default App
