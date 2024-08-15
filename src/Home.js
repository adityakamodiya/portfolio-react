import React from 'react'
import dummy from "./dummy.jpeg"
import image from './home_image.png'
import resume from './Images/Resume_-_Aditya_Kamodiya_Latest[1].PDF'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div id='wrapper'>
       <div className='left-right'> 
       <img src={image}></img>
         <div className='left'></div>
    
         <div className='right'>
          <div className='name'>
            <h1>Aditya kamodiya</h1>
            </div>
          <div className='buttons'>
            <button><a  href={resume}>resume</a></button>
            <button> <Link to='/Hire me'>hire me</Link></button>
          </div>
         </div>
       </div>
    
    </div>
    
    </>
  )
}

export default Home
