import React from "react"
import ApartmentDescription from '../../components/DescriptionPanel'
import ApartmentBanner from "../../components/ImageBanner"
import ApartmentHeader from "../../components/ApartmentHeader"
import { useApartment } from "../../hook/useApartment"
import "./ApartmentPage.scss"


function ApartmentPage() {
    const flat = useApartment();

if (flat == null) return <div>... Loading</div>

return (
    <div className='apartment-page'>
        <div> 
            <ApartmentBanner pictures={flat.pictures} />
        </div>
           <ApartmentHeader flat={flat} />
        <div className="apartment__description__area">
            <ApartmentDescription title="Description" content={flat.description} />
            <ApartmentDescription title="Equipements" content={flat.equipments.map((eq, i) => <li key={i}>{eq}</li>)} />
        </div>
    </div>
  )
}

export default ApartmentPage
