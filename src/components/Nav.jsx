import React from 'react'
import './Nav.css'

function Navbar() {
  return (
    <div>
      <div className="nav-main">
        <div className="nav-label">
            <h1 className="logo">HH</h1>
        </div>
        <div className="nav-list">
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
    </div>
  )
}

export default Navbar
