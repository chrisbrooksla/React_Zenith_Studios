import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";


function StudioADetails() {
  return (
    <React.Fragment>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Studio A</h1>

            <p>
            The world's largest purpose-built recording studio, Studio A can comfortably accomodate a large symphony orchestra or chorus. It's played host to celebrated classical recordings from Elgar and Prokofiev, as well as iconic scores from "The Lord Of The Rings Trilogy", "The Empire Strikes Back", "Skyfall", and "Gravity", to more recent releases of "Avengers: EndGame", "Black Panther" and the award winning "The Shape Of Water". Artist sessions include Stevie Wonder, Kanye West, Sting, Harry Styles, and U2.
              <br />
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>Outboard Gear</h3>
          <ul>
          <li>Avid Pro Tools HDX</li>
                <li>AMS NEVE 88RS – 72-channel console</li>
                <li>Bowers & Wilkins Nautilus 800D monitors with Classé Audio amplification</li>
                <li>6x Yamaha NS10M</li>
                <li>Lexicon 480L and 224X</li>
                <li>GML 8200 EQ</li>
                <li>dbx 120XP Subharmonic Synthesizer</li>
                <li>Focusrite RED 3 stereo compressor</li>
          </ul>
          </Col>
          <Col>
          <h3>Instruments</h3>
          <ul>
          <li>Challen Studio piano</li>
                  <li>Hammond Organ B3 and RT3</li>
                  <li>Gibson Les Paul Standard, ES-335, EB Bass and Studio EC Acoustic</li>
                  <li>Goldenvoice keyboard</li>
                  <li>Korg Oasys and M1</li>
                  <li>Marshall Bluesbreaker and JVM205C</li>
                  <li>M-Audio Keystation 88</li>
                  <li>Schiedmayer Celesta</li>
            
          </ul>
          </Col>
        </Row>
      </Container>
      
    </React.Fragment>
  );
}

export default StudioADetails;
