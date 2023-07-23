import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar({scrollToElement}) {
  return (
    <div className='myNavbar'>
        <h1 onClick={()=>{scrollToElement('.myHome')}}>Pulkit's Portfolio</h1>
        <div>
          <div onClick={()=>{scrollToElement('.myHome')}}>Home</div>
          <div onClick={()=>{scrollToElement('.myAbout')}}>About</div>
          <div>Skills</div>
          <div onClick={()=>{scrollToElement('.myProjects')}}>Projects</div>
          <div>Contact</div>
        </div>
    </div>
  )
}

export default Navbar