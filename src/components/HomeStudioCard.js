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
} from "reactstrap";
import { Link } from "react-router-dom";

class HomeStudioCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader tag="h1">{this.props.studio.name}</CardHeader>

          <CardImg
            className="cardImg"
            height="300"
            src={this.props.studio.image}
          />

          <CardBody>
            <CardSubtitle tag="h3">{this.props.studio.tagline}</CardSubtitle>

            <br />

            <Button tag={Link} to={this.props.studio.section}>
              Details
            </Button>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default HomeStudioCard;
