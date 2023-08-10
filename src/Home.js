import React from 'react'
import dummy from "./dummy.jpeg"


function Home() {
  return (
    <>
    <div id='wrapper'>
       <div className='left-right'> 
       <img src={dummy}></img>
         <div className='left'></div>
    
         <div className='right'>
          <div className='name'>
            <h1>Aditya kamodiya</h1>
            </div>
          <div className='buttons'>
            <button>resume</button>
            <button>hire me</button>
          </div>
         </div>
       </div>
    
    </div>
    
    </>
  )
}

export default Home
