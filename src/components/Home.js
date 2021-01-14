import React , {Component} from "react";
import HomeCarousel from './HomeCarousel'
import {Container, Row, Col} from 'reactstrap'
import StudioCard from './StudioCard'



class Home extends Component{
   constructor(){
      super()
      this.state={
         studios: [
            {
               id: 1,
               name: "Studio A",
               tagline: "Studio A Has It All",
               description: "Click for more details",
               image: "/Assets/img/studio-pics/neve-1.jpg"
               
            },
            {
               id: 2,
               name: "Studio B",
               tagline: "Our Most Famous Studio Space",
               description: "Click for more details",
               image: "/Assets/img/studio-pics/abbey-road-piano.jpg"
            },
            {
               id: 3, 
               name: "Studio C",
               tagline: "The Legendary Sound",
               description: "Click for more details",
               image: "/Assets/img/studio-pics/music-room.jpg"
            }
         ]
      }
   }

render(){
   const studioCards = this.state.studios.map(studio => {
      return(
         <Col sm="4">
            <StudioCard studio={studio}/>
         </Col>
      )
   })

   return(
      <React.Fragment>
      <HomeCarousel className="carousel"/>
      <Container fluid className="home-card-area">
         <Row>
            {studioCards}
         </Row>
      </Container>
      </React.Fragment>
   )
}

}



export default Home;