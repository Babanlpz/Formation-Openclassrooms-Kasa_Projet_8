import React from 'react'
import "./ApartmentHeader.scss"


/**
 * La fonction ApartmentHeader prend un objet flat en tant que prop,
 *  extrait le nom du propriétaire, puis rend l'en-tête d'un appartement avec le titre, 
 * l'emplacement, les étiquettes, le nom du propriétaire avec une image de profil, 
 * et une notation d'étoiles basée sur la note de l'appartement.
 * @param {*} param0 
 * @returns 
 */
function ApartmentHeader({ flat }) {

    const { name } = flat.host;
    const [firstName, lastName] = name.split(" ")

  return (
    <div className='apartment__header'>
            <div className='apartment__title'>
                <h1>{flat.title}</h1>
                <h2>{flat.location}</h2>
                <div className='apartment__tags'>
                    {flat.tags.map((tag) => (
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
                        <img src={flat.host.picture} alt='' />
                    </div>
                </div>
                <div className='apartment__owner__stars'>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={flat.rating >= num ? "on" : ""}><i class="fa-solid fa-star" /></span>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default ApartmentHeader