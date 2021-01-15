import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'



export class StudioDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Container fluid className="hero-image-area">
          <Row>
            <Col>
              <img
                className="hero-image"
                style={{height:'auto', width:'100%'}}
                src={this.props.studioDeet.image}
                
              ></img>
            </Col>
            </Row>
            <Row>
            <Col>
            <img className="hero-image" src={this.props.studioDeet.image} style={{height:'auto', width:'100%'}}></img>
            </Col>
            </Row>
            <Row>
            <Col>
              <p>{this.props.studioDeet.description}</p>
            </Col>
            </Row>

            <Row>
              <Col>
              <h4>Outboard Gear</h4>
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
              <h4>Instruments</h4>
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
              <Col>
                
              </Col>
            </Row>
          

          
        </Container>
      </React.Fragment>
    );
  }
}

export default StudioDetails;
