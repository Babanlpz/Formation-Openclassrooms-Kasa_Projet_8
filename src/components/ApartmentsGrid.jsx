import React, { useEffect, useState } from 'react'
import "./ApartmentsGrid.scss"
import Apartment from './Apartment.jsx'
import { useApartments } from '../hook/useApartments.jsx'

/**
 * La fonction ApartmentsGrid utilise le hook useApartments pour obtenir la liste des appartements, 
 * puis rend une grille d'appartements en utilisant la fonction Apartment pour chaque élément de la liste,
 *  en passant les propriétés nécessaires telles que le titre, l'image et l'ID.
 * @returns 
 */
function ApartmentsGrid() {
  const apartments = useApartments();

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
          <Apartment title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id} />
       ))}
      
    </div>
  )
}

export default ApartmentsGrid