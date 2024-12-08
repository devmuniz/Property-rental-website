import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import { Navigation, Pagination } from "swiper/modules";
import "./Carousel.css";

function ImageCarousel() {
  const images = [
    "/assets/img/house1.jpeg",
    "/assets/img/house2.jpg",
    "/assets/img/house3.jpg",
  ];

  return (
    <Swiper
      navigation={true} // Botoes de navegação
      pagination={{ clickable: true }} // bolinhas clicáveis :)
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      className="custom-swiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} className="imgsCarousel" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageCarousel;
