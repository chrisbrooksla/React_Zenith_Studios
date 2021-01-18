import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

function StudioCDetails() {
  return (
    <React.Fragment>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Studio C</h1>

            <p>
              The world's largest purpose-built recording studio, Studio A can
              comfortably accomodate a large symphony orchestra or chorus. It's
              played host to celebrated classical recordings from Elgar and
              Prokofiev, as well as iconic scores from "The Lord Of The Rings
              Trilogy", "The Empire Strikes Back", "Skyfall", and "Gravity", to
              more recent releases of "Avengers: EndGame", "Black Panther" and
              the award winning "The Shape Of Water". Artist sessions include
              Stevie Wonder, Kanye West, Sting, Harry Styles, and U2.
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
              <li>SSL 9000J – 96-channel console</li>
              <li>
                Quested Q412 System and Bowers & Wilkins Nautilus 800D monitors
                with Classé Audio amplification
              </li>
              <li>Teletronix LA-2A</li>
              <li>
                TL Audio Dual Valve preamp and compressor, EQ-2 parametric EQ
                and N1 EQ
              </li>
              <li>Tube-Tech CL 1B compressor and Stereo Valve LCA 2B</li>
              <li>
                5x Urei 1176LN limiters, 1x 1178 Stereo Limiter and 1x LA-4
                Compressor/Limiter
              </li>
              <li>36x AMS Neve Montserrat mic preamps, 12x 1081 mic preamps</li>
            </ul>
          </Col>
          <Col>
            <h3>Instruments</h3>
            <ul>
              <li>Hammond Organ B3</li>
              <li>Ludwig 4 piece</li>
              <li>Schiedmayer Celeste</li>
              <li>Gibson Les Paul Standard</li>
              <li>Gibson 335</li>
              <li>Gibson Studio EC Acoustic</li>
              <li>Fender P Bass</li>
              <li>Ampeg B15</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default StudioCDetails;
