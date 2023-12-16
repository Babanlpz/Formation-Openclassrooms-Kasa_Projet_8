import React from 'react'
import { createBrowserRouter, Outlet } from "react-router-dom"
import Homepage from '../pages/Homepage.jsx'
import Footer from "../layout/Footer.jsx"
import Main from '../layout/Main'
import Navbar from "../components/Navbar.jsx"
import ApartmentPage from '../pages/ApartmentPage.jsx'


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
    errorElement: <h1>404 not found</h1>,
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
        element:  <h1>A propos</h1>
      },
    ],
  },
 
])