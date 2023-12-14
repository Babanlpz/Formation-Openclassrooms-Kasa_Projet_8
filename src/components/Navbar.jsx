import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.scss"

function Navbar() {

  let activeStyle = {
    textDecoration: " underline",
    color: "$color-primary"
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