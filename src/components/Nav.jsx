import React from 'react'

const Nav = () => {
  return (
    
        <nav className="navbar">
        <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="rightNav">
            <input type="text" name="search" id="search" placeholder="Search"/>
            <button className="btn btn-sm">Search</button>
        </div>
    </nav>
    
  )
}

export default Nav