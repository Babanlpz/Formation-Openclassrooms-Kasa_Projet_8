import React from 'react'
import './Footer.scss'


/**
 * Footer rend un élément <div> avec la classe 'footer',
 *  contenant une section avec une image de logo (<img>),
 *  suivi d'une section de texte avec les mentions de droits d'auteur "© 2020 Kasa." et "All rights reserved".
 * @returns 
 */
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