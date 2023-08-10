import React from 'react'
import Sub_qualification from './Sub_qualification'
function Qualification() {
  return (
    <>
    <div id='wrapper' className='qualification-wrapper'>
       <button>education</button>
       <button>internship</button>
       <div className='sub-data' ><Sub_qualification/><Sub_qualification/><Sub_qualification/></div>
    </div></>
  )
}

export default Qualification
