import React, { useEffect, useState } from "react"
import ApartmentDescription from '../components/DescriptionPanel'
import ApartmentBanner from "../components/ImageBanner"
import ApartmentHeader from "../components/ApartmentHeader"
import { useLocation } from "react-router-dom/dist"




function ApartmentPage() {
    const location = useLocation();    
    const [selectedFlat, setSelectedFLat] = useState(null);
useEffect(fetchApartmentData, []);

function fetchApartmentData() {
    fetch("db.json")
    .then((res) => res.json())
    .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setSelectedFLat(flat);
    })
    .catch(console.error); 
}
if (selectedFlat == null) return <div>... Loading</div>

return (
    <div className='apartment-page'>
        <div> 
            <ApartmentBanner imageUrl={selectedFlat.cover} />
        </div>
           <ApartmentHeader selectedFlat={selectedFlat} />
        <div className="apartment__description__area">
            <ApartmentDescription />
            <ApartmentDescription />
        </div>
    </div>
  )
}

export default ApartmentPage
