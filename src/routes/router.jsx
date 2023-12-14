import React from 'react'
import { createBrowserRouter, Outlet } from "react-router-dom"
import Homepage from '../pages/Homepage.jsx'
import Footer from "../components/Footer.jsx"
import Navbar from "../components/Navbar.jsx"

const HeaderFooterLayout = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
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
        element: <h1>Nos appartements</h1>
      },
      {
        path: "/about",
        element:  <h1>A propos</h1>
      },
    ],
  },
 
])