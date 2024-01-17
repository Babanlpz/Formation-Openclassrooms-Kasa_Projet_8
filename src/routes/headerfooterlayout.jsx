import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/Footer';
import Main from '../layout/Main';
import Navbar from '../components/Navbar';


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