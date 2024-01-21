import React from 'react'
import "./ErrorPageNotFound.scss"
import Navbar from '../../components/Navbar'
import Main from '../../layout/Main'
import { Link } from 'react-router-dom/dist';
import Footer from '../../layout/Footer'


/**
 * ErrorPageNotFound rend une page d'erreur 404 avec un en-tête comprenant 
 * une barre de navigation, un contenu principal contenant un message d'erreur 
 * et un lien de retour à la page d'accueil, suivi d'un pied de page.
 * @returns 
 */
function ErrorPageNotFound() {
  return (
   <>
    <Navbar />
      <Main>
          <div className='error__page'>
              <h1>404</h1>
              <h2>oops! La page que vous demandez n'existe pas</h2>
              <Link to="/">Retourner sur la page d'acceuil</Link>
          </div>
      </Main>
    <Footer />
   </>
  )
}

export default ErrorPageNotFound;