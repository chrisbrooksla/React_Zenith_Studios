import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

function StudioBDetails() {
  return (
    <React.Fragment>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Studio B</h1>

            <p>
              <p>
                The scene of landmark recordings by The Beatles, Pink Floyd,
                Oasis, Adele and many more, Studio B has been at the heart of
                popular music since it first opened its doors back in 1932. Its
                unique design, modern isolation booths, warm acoustics and
                unparalleled history have made it one of the most recognisable
                and sought-after studios in the world. Recent sessions include
                George Ezra, DAVE, The 1975, Ed Sheeran, Architects Noel
                Gallagher, Ian Brown and Panic! At The Disco.
              </p>
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
              <li>AMS NEVE 88RS – 60-channel console</li>
              <li>
                Bowers & Wilkins Nautilus 801 monitors with Classé Audio
                amplification
              </li>
              <li>Lexicon 480L and 224X</li>
              <li>TC Electronic M5000</li>
              <li>AMS DMX 15-80S delay and RMX 16</li>
              <li>Avalon Vt-737sp channel strip</li>
              <li>Prism MEA-2 EQ</li>
            </ul>
          </Col>
          <Col>
            <h3>Instruments</h3>
            <ul>
              <li>Fender Rhodes</li>
              <li>Wurlitzer</li>
              <li>Sequential Prophet 6</li>
              <li>Steinway upright</li>
              <li>Fender Princeton</li>
              <li>Fender Deluxe Reverb</li>
              <li>Vox Ac15</li>
              <li>Marshall Bluesbreaker</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default StudioBDetails;
