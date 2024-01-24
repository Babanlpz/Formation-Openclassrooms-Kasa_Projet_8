import React from 'react'
import "./Apartment.scss"
import { Link } from "react-router-dom"


/**
 * La fonction Apartment rend un élément <Link> qui enveloppe un conteneur <div> 
 * représentant un appartement. Lorsqu'il est cliqué, il navigue vers la page '/flat' en passant
 *  l'ID de l'appartement via l'état. L'appartement est affiché avec une image, un titre, et est stylisé avec la classe 'apartment'.
 * @param {*} props 
 * @returns 
 */
function Apartment(props) {
  
  return (
      <Link to={`/flat/${props.id}`}
    state={{
      apartmentId: props.id,
    
    }}>
          <div className='apartment'>
            <img src={props.imageUrl} alt='Apartment'/>
            <div className='apartment__subtitle'>{props.title}</div> 
         </div>
      </Link>
  
  )
}

export default Apartment