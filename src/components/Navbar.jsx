import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.scss"


/**
 * La fonction Navbar rend une barre de navigation avec un logo, des liens vers la page d'accueil et la page "À propos". 
 * Les styles et les classes sont conditionnellement appliqués aux liens actifs,
 * indiqués par le soulignement et la couleur spécifiés dans les variables activeStyle et activeClasseName.
 * @returns 
 */
function Navbar() {

  let activeStyle = {
    textDecoration: " underline",
    color: "$color-primary"
  }

  let activeClasseName = "underline"

  return (
    <nav className='navbar'>
    <NavLink className='navbar__logo' to="/">
        <img src='/logo.png' alt='Logo' />
    </NavLink>

    <div className="navbar__list">
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
    </div>
  </nav>
    
    
  )

}

export default Navbar