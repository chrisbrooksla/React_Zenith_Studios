import React, { Component } from 'react'
import StudioPicture from '../studio-pics/burgundy.jpg'
import {Container, Row, Col} from 'reactstrap'

function AboutHeroImage(){
    return(
        <Container fluid className ="hero-image-area">
        <Row>
            <Col>
            <img className="hero-image" src={StudioPicture} style={{height:'auto', width:'100%'}}></img>
            </Col>
            </Row>
        </Container>
    )
}
export default AboutHeroImage