import React, { useState, useEffect } from 'react'
import './FirstView.css'
import '../../../index.css'
import RegisterSuperior from '../../components/RegisterSuperior/RegisterSuperior'
import Welcome from '../../components/Welcome/Welcome'
import ImageCarousel from '../../components/Carousel/Carousel'
import DescriptonCarousel from '../../components/Descripton Carousel/DescriptionCarousel'

function FirstView() {
    return (
        <div>
            <RegisterSuperior />
            <Welcome />
            <ImageCarousel />
            <DescriptonCarousel />
        </div> 

    )
}

export default FirstView