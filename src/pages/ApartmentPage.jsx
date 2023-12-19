import React from "react"
import ApartmentDescription from '../components/DescriptionPanel'
import ApartmentBanner from "../components/ImageBanner"
import ApartmentHeader from "../components/ApartmentHeader"




function ApartmentPage() {

    /*
        useParams() => permettra de retourner un objet qui contient les variables de l'URL        
    */
   
  return (
    <div className='apartment-page'>
        <div> 
            <ApartmentBanner />
        </div>
           <ApartmentHeader />
        <div className="apartment__description__area">
            <ApartmentDescription />
            <ApartmentDescription />
        </div>
    </div>
  )
}

export default ApartmentPage
