import React from 'react'
import "./ApartmentHeader.scss"

function ApartmentHeader(props) {

    const selectedFlat = props.selectedFlat
    const name = selectedFlat.host.name 
    const [firstName, lastName] = name.split(" ")

  return (
    <div className='apartment__header'>
            <div className='apartment__title'>
                <h1>{selectedFlat.title}</h1>
                <h2>{selectedFlat.location}</h2>
                <div className='apartment__tags'>
                    {/*<span>Cozy</span>
                    <span>Canal</span>
                    <span>Paris 10</span>*/}
                    {selectedFlat.tags.map((tag) => (
                         <span className="apartment__tag" key= {tag}>{tag}</span>
                        ))}
                </div>
            </div>
            <div className='apartment__owner'>
                <div className='apartment__owner__details'>
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span> 
                    </h3>
                    <div className='apartment__owner__badge'>
                        <img src={selectedFlat.host.picture} alt='' />
                    </div>
                </div>
                <div className='apartment__owner__stars'>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={props.selectedFlat.rating >= num ? "on" : ""}><i class="fa-solid fa-star" /></span>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default ApartmentHeader