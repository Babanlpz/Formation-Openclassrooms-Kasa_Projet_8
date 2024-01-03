import React from 'react'
import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from '../pages/home/Home.jsx'
import Footer from "../layout/Footer.jsx"
import Main from '../layout/Main'
import Navbar from "../components/Navbar.jsx"
import ApartmentPage from '../pages/apartment/ApartmentPage.jsx'
import About from '../pages/about/About.jsx'
import ErrorPageNotFound from '../pages/error/ErrorPageNotFound.jsx'


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

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {        
        path: "/flat/:id",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element:  <About />
      },
    ],
  },
 
])