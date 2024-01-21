import React from "react"
import ReactDOM  from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"


/**
 * Ce code utilise ReactDOM pour rendre le composant <RouterProvider> sur l'élément DOM avec l'ID "root", en utilisant une racine de rendu créée avec createRoot.
 */

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
