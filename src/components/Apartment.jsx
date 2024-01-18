import React from 'react'
import "./Apartment.scss"
import { Link } from "react-router-dom"

function Apartment(props) {
  
  return (
      <Link to="/flat"
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