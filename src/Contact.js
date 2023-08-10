import React from 'react'

function Contact() {
  return (
    <>
    <div id='wrapper' className='contact-wrapper'>
      <h1>contact</h1>
      <form>
    <input type='text' placeholder='name'></input>
     <div> <input type='email' placeholder='E-mail'></input><input type='number' placeholder='contact'></input></div> 
     <input type='text' placeholder='subject'></input>
     <input type='textarea' placeholder='write something'></input>
     <button> Submit </button>
      </form>
      </div>
    </>
  )
}

export default Contact
