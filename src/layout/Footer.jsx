import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <img className='footer__logo' src='./logofooter1.png' alt='logo'/>
        </div>
        <div className='footer__text'>
        <p>© 2020 Kasa.</p>
        <p>All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer