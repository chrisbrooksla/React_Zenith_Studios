import React, { Component } from 'react'
import AboutHeroImage from './AboutHeroImage'
import AboutDescription from './AboutDescription'
import AboutGallery from './AboutGallery'
import {Container, Row, Col} from 'reactstrap'
import StudioADetails from './StudioADetails'
import StudioAHero from './StudioAHero'
import StudioBDetails from './StudioBDetails'
import StudioBHero from './StudioBHero'
import StudioCDetails from './StudioCDetails'
import StudioCHero from './StudioCHero'

function Studios() {
   return (
      <React.Fragment>
         
      <StudioAHero />
      <StudioADetails/>

      <StudioBHero />
      <StudioBDetails/>

      <StudioCHero />
      <StudioCDetails/>

      
      
        </React.Fragment>
   )
}

export default Studios