import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardImgOverlay,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

class HomeStudioCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Container class="home-studio-card-area">
          <Row>
            <Col>
              <Card>
                <CardHeader tag="h1">{this.props.studio.name}</CardHeader>

                <CardImg
                  className="cardImg"
                  height="100%"
                  width="100%"
                  src={this.props.studio.image}
                />

                <CardBody>
                  <CardSubtitle tag="h3">
                    {this.props.studio.tagline}
                  </CardSubtitle>

                  <br />

                  <Button tag={Link} to={this.props.studio.section}>
                    Details
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default HomeStudioCard;
