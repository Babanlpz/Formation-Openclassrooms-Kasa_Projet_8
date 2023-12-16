import React from 'react'
import "./ApartmentPage.scss"


function ApartmentPage() {
  return (
    <div className='apartment-page'>
        <div> 
            <img src='image2.png' alt='Image appartement' />
        </div>
        <div className='apartment__header'>
            <div className='apartment__title'>
                <h1>Crazy loft on Canal Saint-Martin</h1>
                <h2>Paris, Ile de France</h2>
                <div className='apartment__tags'>
                    <span>Cozy</span>
                    <span>Canal</span>
                    <span>Paris 10</span>
                </div>
            </div>
            <div className='apartment__owner'>
                <div className='apartment__owner__details'>
                    <h3>
                        <span>Alexandre</span>
                        <span>Dumas</span> 
                    </h3>
                    <div className='apartment__owner__badge'></div>
                </div>
                <div className='apartment__owner__stars'>
                <span>⭐️</span>
                <span>⭐️</span>
                <span>⭐️</span>
                <span>⭐️</span>
                <span>⭐️</span>
                </div>
            </div>
        </div>
        <div className='apartment__description'>
            <p>Description</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quia beatae facere sequi, saepe laboriosam illum nesciunt obcaecati rerum illo adipisci dolore distinctio ratione ea cum animi, quos commodi provident.</p>
        </div>
        <div className='apartment__description'>
            <p>Description</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quia beatae facere sequi, saepe laboriosam illum nesciunt obcaecati rerum illo adipisci dolore distinctio ratione ea cum animi, quos commodi provident.</p>
        </div>
    </div>
  )
}

export default ApartmentPage