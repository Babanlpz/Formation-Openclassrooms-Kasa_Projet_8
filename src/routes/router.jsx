import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/home/Home.jsx'
import ApartmentPage from '../pages/apartment/ApartmentPage.jsx'
import About from '../pages/about/About.jsx'
import ErrorPageNotFound from '../pages/error/ErrorPageNotFound.jsx'
import HeaderFooterLayout from '../routes/headerfooterlayout.jsx'

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
        path: "/flat",
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element:  <About />
      },
    ],
  },
 
])