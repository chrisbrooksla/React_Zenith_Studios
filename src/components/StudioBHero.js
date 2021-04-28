import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

function StudioBHero() {
  return (
    <Container fluid className="hero-image-area">
      <Row>
        <Col>
          <img
            className="hero-image"
            src="../img/studio-pics/list-pics/abbey-road-studio.png"
            style={{ height: "auto", width: "100%" }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
}
export default StudioBHero;
