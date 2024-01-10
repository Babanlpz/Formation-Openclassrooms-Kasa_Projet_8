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
    <NavLink className='navbar__logo' >
      <NavLink to="/">
        <img src='logo.png' alt='Logo' />
      </NavLink>
    </NavLink>
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