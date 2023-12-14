import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='navbar__logo'>
        <img src='logo.png' alt='Logo' />
    </div>
    <div>Acceuil</div>
    <div>A propos</div>

  </nav>
    
    
  )

}

export default Navbar