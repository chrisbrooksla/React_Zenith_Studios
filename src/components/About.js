import React, { Component } from 'react'
import HeroImage from './HeroImage'
import StudioDescription from './StudioDescription'
import AboutGallery from './AboutGallery'
import {Container, Row, Col} from 'reactstrap'

function About() {
   return (
      <React.Fragment>
         
      <HeroImage />
      <StudioDescription/>

      <AboutGallery/>
      
        </React.Fragment>
   )
}

export default About