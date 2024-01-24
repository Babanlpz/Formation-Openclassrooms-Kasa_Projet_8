import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import Navbar from '../components/Navbar';

/**
 * Ce code définit un composant HeaderFooterLayout qui rend un 
 * en-tête avec <Navbar>, une section principale avec <Main> contenant 
 * le contenu de la route actuelle (<Outlet>), et un pied de page avec <Footer>.
 * @returns 
 */
const HeaderFooterLayout = () => {
    return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
    )
  }

export default HeaderFooterLayout;