import React, { useEffect, useState } from "react"
import ApartmentDescription from '../../components/DescriptionPanel'
import ApartmentBanner from "../../components/ImageBanner"
import ApartmentHeader from "../../components/ApartmentHeader"
import { useParams } from "react-router-dom/dist"


function ApartmentPage() {
    const {id} = useParams();    
    const [selectedFlat, setSelectedFLat] = useState(null);

    useEffect(() => {
        console.log("component was mounted, we fetch apartment")
        const abortController = new AbortController()
        fetch("/db.json")
            .then((res) => res.json())
            .then((flats) => {        
                const flat = flats.find((flat) => flat.id === id);
                setSelectedFLat(flat);
            })
            .catch(console.error);
            return() => {
                console.log("component was unmounted, we cancel the fetch")
                abortController.abort()
             } 

        
    }, []);



if (selectedFlat == null) return <div>... Loading</div>

return (
    <div className='apartment-page'>
        <div> 
            <ApartmentBanner pictures={selectedFlat.pictures} />
        </div>
           <ApartmentHeader selectedFlat={selectedFlat} />
        <div className="apartment__description__area">
            <ApartmentDescription title="Description" content={selectedFlat.description} />
            <ApartmentDescription title="Equipements" content={selectedFlat.equipments.map((eq, i) => <li key={i}>{eq}</li>)} />
        </div>
    </div>
  )
}

export default ApartmentPage
