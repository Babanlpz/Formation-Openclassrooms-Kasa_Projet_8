import React from 'react'
import ApartmentBanner from '../components/ImageBanner'
import DescriptionPanel from '../components/DescriptionPanel'
import "./About.scss"

function About() {
  return (
    <>
        <ApartmentBanner />
        <div className='about__container'>
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        </div>
    </>
  )
}

export default About