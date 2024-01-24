import React from 'react'
import "./Main.scss"

/**
 * La fonction Main est un composant qui rend un conteneur <div> avec la classe 'main',
 *  enveloppant le contenu passé en tant qu'enfants. Cela est souvent utilisé pour définir 
 * la section principale du contenu sur une page.
 * @param {*} param0 
 * @returns 
 */
function Main({ children }) {
    return <div className='main'>{children}</div>
  
}

export default Main