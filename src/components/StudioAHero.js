import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

function StudioAHero() {
  return (
    <Container fluid className="hero-image-area">
      <Row>
        <Col>
          <img
            className="hero-image"
            src="/Assets/img/studio-pics/list-pics/berklee-hero.jpg"
            style={{ height: "auto", width: "100%" }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
}
export default StudioAHero;
