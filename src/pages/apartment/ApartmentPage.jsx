import React from "react"
import ApartmentDescription from '../../components/DescriptionPanel'
import ApartmentBanner from "../../components/ImageBanner"
import ApartmentHeader from "../../components/ApartmentHeader"
import { useApartment } from "../../hook/useApartment"
import "./ApartmentPage.scss"



/**
 * ApartmentPage utilise le hook useApartment pour obtenir les données de l'appartement,
 *  affiche un message de chargement si les données ne sont pas encore disponibles,
 *  sinon rend une page d'appartement avec une bannière, un en-tête, et une section de 
 * description incluant la description et les équipements.
*/
function ApartmentPage() {
    const {isLoading, isError404, flat} = useApartment(); 

    if (isLoading) return <div>... Loading</div>
    if (isError404) return <ErrorPageNotFound />

return (
    <div className='apartment-page'>
        <div> 
            <ApartmentBanner pictures={flat.pictures} />
            <ApartmentHeader flat={flat} />
        </div>
           
        <div className="apartment__description__area">
            <ApartmentDescription title="Description" content={flat.description} />
            <ApartmentDescription title="Equipements" content={flat.equipments.map((eq, i) => <li key={i}>{eq}</li>)} />
        </div>
    </div>
  )
}

export default ApartmentPage
