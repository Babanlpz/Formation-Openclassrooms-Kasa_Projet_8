import React from 'react'
import "./ApartmentsGrid.css"
import Apartment from './Apartment.jsx'

function ApartmentsGrid() {
  return (
    <div className='grid'>
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
    </div>
  )
}

export default ApartmentsGrid