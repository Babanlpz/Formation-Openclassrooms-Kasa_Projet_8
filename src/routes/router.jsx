import React from 'react'
import { createBrowserRouter, Outlet } from "react-router-dom"
import Homepage from '../pages/Homepage.jsx'
import Footer from "../layout/Footer.jsx"
import Main from '../layout/Main'
import Navbar from "../components/Navbar.jsx"
import ApartmentPage from '../pages/ApartmentPage.jsx'
import About from '../pages/About.jsx'
import ErrorPageNotFound from '../pages/ErrorPageNotFound.jsx'


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
        element: <Homepage />
      },
      {        
        path: "/flat",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element:  <About />
      },
    ],
  },
 
])