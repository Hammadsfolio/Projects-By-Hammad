import React from 'react'
import './Nav.css'
import { useState } from 'react'


function Navbar() {

  const [hamburgerClick , setHamburger] = useState(false);



  return (
    <div>
      <div className="nav-main">
        <div className="nav-label">
            <h1 className="logo">HH</h1>
        </div>
        <div className="nav-list" >
            <ul>
                <li><a className="cursor-target" href="#">Home</a></li>
                <li><a className="cursor-target" href="#">About</a></li>
                <li><a className="cursor-target" href="#">Projects</a></li>
                <li><a className="cursor-target" href="#">Contact</a></li>
            </ul>
        </div>
        <div className="nav-btn">
            <button className='Nav-button cursor-target'>Whatsapp</button>
            <button className='Nav-button cursor-target'>LinkedIn</button>
        </div>
      </div>

      <div  className='hamburger' onClick={()=>{
          setHamburger(!hamburgerClick);
        }}>
        <div className={`hamburger-line ${hamburgerClick ? "hamburger-top-line" : "" }`}></div>
        <div className={`hamburger-line ${hamburgerClick ? "hamburger-center-line" : "" }`}></div>
        <div className={`hamburger-line ${hamburgerClick ? "hamburger-bottom-line" : "" }`}></div>
      </div>

      <div className={`mobile-nav ${hamburgerClick ? "mobile-nav-onClick" : "" }`}>
        <div className="nav-list mobile-nav-list">
            <ul>
                <li><a className="cursor-target mob-cursor" href="#">Home</a></li>
                <li><a className="cursor-target mob-cursor" href="#">About</a></li>
                <li><a className="cursor-target mob-cursor" href="#">Projects</a></li>
                <li><a className="cursor-target mob-cursor" href="#">Contact</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
