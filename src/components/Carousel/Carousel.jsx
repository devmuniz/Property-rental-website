import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import "swiper/css/pagination"; // Importa o CSS da paginação
import { Navigation, Pagination } from "swiper/modules";

function ImageCarousel() {
  const images = [
    "../src/assets/img/house1.jpeg",
    "../src/assets/img/house2.jpg",
    "../src/assets/img/house3.jpg",
  ];

  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }} // Habilita as bolinhas clicáveis
      modules={[Navigation, Pagination]} // Adiciona o módulo de paginação
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
};

export default ImageCarousel;
