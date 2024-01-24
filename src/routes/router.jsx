import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/home/Home.jsx'
import ApartmentPage from '../pages/apartment/ApartmentPage.jsx'
import About from '../pages/about/About.jsx'
import ErrorPageNotFound from '../pages/error/ErrorPageNotFound.jsx'
import HeaderFooterLayout from '../routes/headerfooterlayout.jsx'



/**
 * Ce code exporte un objet router créé avec createBrowserRouter qui définit la structure de
 *  l'application avec des composants spécifiques pour différentes routes, tels que <Home>,
 *  <ApartmentPage>, et <About>, utilisant un layout <HeaderFooterLayout> avec une page d'erreur
 *  <ErrorPageNotFound>
 */
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
        element: <ApartmentPage />,
      },
      {
        path: "/about",
        element:  <About />
      },
    ],
  },
 
])