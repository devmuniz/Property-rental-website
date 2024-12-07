import React, { useState, useEffect } from 'react'
import './SecondView.css'
import '../../../index.css'
import RegisterSuperior from '../../components/RegisterSuperior/RegisterSuperior'
import Welcome from '../../components/Welcome/Welcome'
import ImageCarousel from '../../components/Carousel/Carousel'

function SecondView() {
    return (
        <div>
            <RegisterSuperior />
            <Welcome />
            <ImageCarousel />   
        </div> 

    )
}

export default SecondView