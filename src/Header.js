import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
        <nav>
            <ul>
                <li><Link to='/' ><i class="fa-solid fa-house"></i></Link></li>
                <li><Link to='about' ><i class="fa-solid fa-user"></i></Link></li>
                <li><Link to='work' ><i class="fa-solid fa-briefcase"></i></Link></li>
                <li><Link to='qualification' ><i class="fa-solid fa-graduation-cap"></i></Link></li>
                <li><Link to='portfolio' ><i class="fa-solid fa-holly-berry"></i></Link></li>
                <li><Link to='contact' ><i class="fa-solid fa-address-book"></i></Link></li>
                <li><Link to='skills' ><i class="fa-solid fa-layer-group"></i></Link></li>
                
                {/* <li><Link to='about' ><i class="fa-solid fa-user"></i></Link></li> */}
                {/* <li><Link to={''} ></Link></li> */}
            </ul>
        </nav>
    </>
  )
}

export default Header
