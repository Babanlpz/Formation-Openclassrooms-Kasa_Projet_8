import React, { useEffect, useState } from 'react'
import "./ApartmentsGrid.scss"
import Apartment from './Apartment.jsx'
import { useApartments } from '../hook/useApartments.jsx'


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