import React, { Component } from "react";
import AboutHeroImage from "./AboutHeroImage";
import AboutDescription from "./AboutDescription";
import AboutGallery from "./AboutGallery";
import { Container, Row, Col } from "reactstrap";

function About() {
  return (
    <React.Fragment>
      <AboutHeroImage />
      <AboutDescription />

      <AboutGallery />
    </React.Fragment>
  );
}

export default About;
