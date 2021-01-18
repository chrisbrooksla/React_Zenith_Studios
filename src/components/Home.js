import React, { Component } from "react";
import HomeCarousel from "./HomeCarousel";
import { Container, Row, Col } from "reactstrap";
import HomeStudioCard from "./HomeStudioCard";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      studios: [
        {
          id: 1,
          name: "Studio A",
          tagline: "Studio A Has It All",
          description: "Click for more details",
          image: "/Assets/img/studio-pics/neve-1.jpg",
          section: "/studios/#section1",
        },
        {
          id: 2,
          name: "Studio B",
          tagline: "Our Most Famous Studio Space",
          description: "Click for more details",
          image: "/Assets/img/studio-pics/abbey-road-piano.jpg",
          section: "/studios/#section2",
        },
        {
          id: 3,
          name: "Studio C",
          tagline: "The Legendary Sound",
          description: "Click for more details",
          image: "/Assets/img/studio-pics/music-room.jpg",
          section: "/studios/#section3",
        },
      ],
    };
  }

  render() {
    const studioCards = this.state.studios.map((studio) => {
      return (
        <Col sm="4">
          <HomeStudioCard studio={studio} />
        </Col>
      );
    });

    return (
      <React.Fragment>
        <Container fluid className="home-card-area">
          <HomeCarousel className="carousel" />

          <Row>{studioCards}</Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
