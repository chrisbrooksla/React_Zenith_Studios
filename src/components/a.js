import React, { Component } from 'react'
import StudioDetails from './StudioADetails'
import {Col, Container, Row} from 'reactstrap'




class Studios extends Component {
   constructor(props){
      super(props)

      this.state={
          studioDetails : [
             {
            id: 1,
            name: "Studio A",
            description: "The world's largest purpose-built recording studio, Studio A can comfortably accomodate a large symphony orchestra or chorus. It's played host to celebrated classical recordings from Elgar and Prokofiev, as well as iconic fil scores from The Lord Of The Rings Trilogy, The Empire Strikes Back, Skyfall, and Gravity, to more recent releases of Avengers: End Game, Black Panther and the award winning The Shape Of Water. Artist sessions include Stevie Wonder, Kanye West, Sting, Harry Styles, and U2.",
            image: "/Assets/img/studio-pics/list-pics/berklee-hero.jpg",
            section: "/studios/#section1",
            instrumentHeader: "Instruments",
            instruments: [
                     "Challen Studio piano",
                     "Hammond Organ B3 and RT3",
                     "Gibson Les Paul Standard, ES-335, EB Bass and Studio EC Acoustic",
                     "Goldenvoice keyboard",
                     "Korg Oasys and M1",
                     "Marshall Bluesbreaker and JVM205C",
                     "M-Audio Keystation 88",
                     "Schiedmayer Celesta"
                  ]
               },
            
             {
               id: 2,
               name: "Studio B",
               description: "The scene of landmark recordings by The Beatles, Pink Floyd, Oasis, Adele and many more, Studio B has been at the heart of popular music since it first opened its doors back in 1932. Its unique design, modern isolation booths,warm acoustics and unparalleled history have made it one of the most recognisable and sought-after studios in the world. Recent sessions include George Ezra, DAVE, The 1975, Ed Sheeran, Architects Noel Gallagher, Ian Brown and Panic! At The Disco.",
               image: "/Assets/img/studio-pics/list-pics/abbey-road-studio.png",
               section: "/studios/#section2",
               equipmentList: [
                  {
                     equipmentHeader: "Outboard Gear",
                     equipment: [
                        "Avid Pro Tools HDX",
                        "AMS NEVE 88RS – 60-channel console",
                        "Bowers & Wilkins Nautilus 801 monitors with Classé Audio amplification",
                        "Lexicon 480L and 224X",
                        "TC Electronic M5000",
                        "AMS DMX 15-80S delay and RMX 16",
                        "Avalon Vt-737sp channel strip",
                        "Prism MEA-2 EQ"
                     ]
                  },
                  {
                     instrumentHeader: "Instruments",
                     instruments: [
                        "Fender Rhodes",
                        "Wurlitzer",
                        "Sequential Prophet 6",
                        "Steinway upright",
                        "Fender Princeton",
                        "Fender Deluxe Reverb",
                        "Vox Ac15",
                        "Marshall Bluesbreaker"
                     ]
                  }
               ],
               
                },
                {
                  id: 3,
                  name: "Studio C",
                  description: "Studio C has a long list of legendary albums that were recorded there over the years. Touted as the classic Rock & Roll studio with one of the best drum rooms in the business, it is also responsive enough to handle the high demand of orchestra sessions. The room is designed for adjustable decay times to suit any application. The room has one 154 sq ft. isolation booth, a choice of Nat King Cole's New York Steinway or Yamaha C9 pianos and a private artist's lounge overlooking the studio.",
                  image: "/Assets/img/studio-pics/list-pics/funky-studio.jpg",
                  section: "/studios/#section3",
                  equipmentList: [
                     {
                        equipmentHeader: "Outboard Gear",
                        equipment: [
                           "Avid Pro Tools HDX",
                           "SSL 9000J – 96-channel console",
                           "Bowers & Wilkins Nautilus 800D monitors with Classé Audio amplification",
                           "Teletronix LA-2A",
                           "TL Audio Dual Valve preamp and compressor, EQ-2 parametric EQ and N1 EQ",
                           "Tube-Tech CL 1B compressor and Stereo Valve LCA 2B",
                           "5x Urei 1176LN limiters, 1x 1178 Stereo Limiter and 1x LA-4 Compressor/Limiter",
                           "36x AMS Neve Montserrat mic preamps, 12x 1081 mic preamps"
                        ]
                     },
                     {
                        instrumentHeader: "Instruments",
                        instruments: [
                           "Hammond Organ B3",
                           "Ludwig 4 piece",
                           "Schiedmayer Celeste",
                           "Gibson Les Paul Standard",
                           "Gibson 335",
                           "Gibson Studio EC Acoustic",
                           "Fender P Bass",
                           "Ampeg B15"
                        ]
                     }
                  ],
                  
                   },
          ]     


      }
   }




   render(){

      const equipmentListA = [
         "Avid Pro Tools HDX",
                     "AMS NEVE 88RS – 72-channel console",
                     "Bowers & Wilkins Nautilus 800D monitors with Classé Audio amplification",
                     "6x Yamaha NS10M",
                     "Lexicon 480L and 224X",
                     "GML 8200 EQ",
                     "dbx 120XP Subharmonic Synthesizer",
                     "Focusrite RED 3 stereo compressor"

      ]

      const equipmentListB = [
         "Avid Pro Tools HDX",
         "AMS NEVE 88RS – 60-channel console",
         "Bowers & Wilkins Nautilus 801 monitors with Classé Audio amplification",
         "Lexicon 480L and 224X",
         "TC Electronic M5000",
         "AMS DMX 15-80S delay and RMX 16",
         "Avalon Vt-737sp channel strip",
         "Prism MEA-2 EQ"
      ]

      const equipmentListC = [
         "Avid Pro Tools HDX",
                           "SSL 9000J – 96-channel console",
                           "Bowers & Wilkins Nautilus 800D monitors with Classé Audio amplification",
                           "Teletronix LA-2A",
                           "TL Audio Dual Valve preamp and compressor, EQ-2 parametric EQ and N1 EQ",
                           "Tube-Tech CL 1B compressor and Stereo Valve LCA 2B",
                           "5x Urei 1176LN limiters, 1x 1178 Stereo Limiter and 1x LA-4 Compressor/Limiter",
                           "36x AMS Neve Montserrat mic preamps, 12x 1081 mic preamps"
      ]
         
      



      const studioDeets = this.state.studioDetails.map(studioDeet=> {
         return(
            <Col sm="4">
               <StudioDetails studioDeet={studioDeet}/>
            </Col>
         )
      })

   

   
   return (
      <React.Fragment>
         <div className="studio-details-area" id="section1">
            {studioDeets}
         </div>
         

      </React.Fragment>
   )
   }
}

export default Studios