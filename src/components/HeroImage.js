import React, { Component } from 'react'
import StudioPicture from '../studio-pics/burgundy.jpg'

function HeroImage(){
    return(
        <div>
            <img src={StudioPicture} style={{height:'auto', width:'100%'}}></img>
        </div>
    )
}
export default HeroImage