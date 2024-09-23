import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Header'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Qualification from './Qualification'
import Work from './Work'
import Skills from './Skills'
import Home from './Home'

// import ".CSS/Home.css"
import About from './About'
import HireMe from './HireMe'
import './CSS/Home.css'; // Import the CSS file
import { useEffect } from 'react'
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
   <>  
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/'  element={<Home/>}></Route>
    <Route path='/Hire me'  element={<HireMe/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    {/* <Route path='/portfolio' element={<Portfolio/>}></Route> */}
    <Route path='/qualification'element={<Qualification/>}></Route>
    <Route path='/work'element={<Work/>}></Route>
   </Routes>
   </BrowserRouter>   
   </>
  )
}

export default App
