import React from 'react'
import ApartmentBanner from '../components/ImageBanner'
import DescriptionPanel from '../components/DescriptionPanel'
import "./About.scss"

function About() {
  return (
    <>
        <ApartmentBanner />
        <div className='about__container'>
        <DescriptionPanel title="Fiabilité" content="C'est important" />
        <DescriptionPanel title="Respect" content="" />
        <DescriptionPanel title="Service" content="" />
        <DescriptionPanel title="Responsabilité" content="" />
        </div>
    </>
  )
}

export default About