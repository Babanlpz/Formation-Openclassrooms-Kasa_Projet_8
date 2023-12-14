import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

  let activeStyle = {
    textDecoration: " underline",
  }

  let activeClasseName = "underline"

  return (
    <nav className='navbar'>
    <div className='navbar__logo'>
        <img src='logo.png' alt='Logo' />
    </div>
    <NavLink to="/" style={({ isActive }) => 
      isActive ? activeStyle : undefined
  }>
      Acceuil
    </NavLink>
    <NavLink to= "/about" className={({ isActive}) => 
      isActive ? activeClasseName : undefined
  }>
      A propos
    </NavLink>

  </nav>
    
    
  )

}

export default Navbar