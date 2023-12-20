import React, { useEffect, useState } from 'react'
import "./ApartmentsGrid.scss"
import Apartment from './Apartment.jsx'


function ApartmentsGrid() {
  const [apartments, setApartments] = useState([])

  useEffect(fetchApartments, [])

  function fetchApartments() {
     fetch("db.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error); 
  }

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
          <Apartment title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>
       ))}
      
    </div>
  )
}

export default ApartmentsGrid