import React, { useState, useEffect } from 'react'
import './SecondView.css'
import '../../../index.css'
import RegisterSuperior from '../../components/RegisterSuperior/RegisterSuperior'
import Welcome from '../../components/Welcome/Welcome'
import ImageCarousel from '../../components/Carousel/Carousel'
import DescriptonCarousel from '../../components/Descripton Carousel/DescriptionCarousel'

function SecondView() {
    return (
        <div>
            <RegisterSuperior />
            <Welcome />
            <ImageCarousel />
            <DescriptonCarousel />
        </div> 

    )
}

export default SecondView