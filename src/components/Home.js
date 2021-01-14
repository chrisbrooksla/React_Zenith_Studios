import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import HomeCarousel from './HomeCarousel'
import {Container, Row, Col} from 'reactstrap'


// function RenderCard({ item }) {
//    return (
//       <Card>
//          <CardImg src={item.image} alt={item.name} />
//          <CardBody>
//             <CardTitle>{item.name}</CardTitle>
//             <CardText>{item.description}</CardText>
//          </CardBody>
//       </Card>
//    );
// }


function Home(props) {
   return (
      <HomeCarousel/>
   );
}

export default Home;