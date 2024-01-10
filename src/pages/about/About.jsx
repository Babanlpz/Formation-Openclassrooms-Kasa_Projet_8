import React from 'react'
import ApartmentBanner from '../../components/ImageBanner'
import DescriptionPanel from '../../components/DescriptionPanel'
import "./About.scss"

function About() {
  return (    
    <>
        <ApartmentBanner />
        <div className={'about__container'} style={{marginTop: '-182px'}}>
          <DescriptionPanel title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
          <DescriptionPanel title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrînera une exclusion de notre plateforme." />
          <DescriptionPanel title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrînera une exclusion de notre plateforme." />
          <DescriptionPanel title="Responsabilité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
    </>
  )
}

export default About