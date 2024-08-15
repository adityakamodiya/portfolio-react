import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Header'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Qualification from './Qualification'
import Work from './Work'
import Skills from './Skills'
import Home from './Home'
import "./portfoluo.css"
import About from './About'
import HireMe from './HireMe'
function App() {
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
    <Route path='/portfolio' element={<Portfolio/>}></Route>
    <Route path='/qualification'element={<Qualification/>}></Route>
    <Route path='/work'element={<Work/>}></Route>
   </Routes>
   </BrowserRouter>   
   </>
  )
}

export default App
