import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import img1 from '../assets/home.svg';



function Carousel() {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        pagination={{
            type:'bullets'
        }}
        scrollbar={{
            draggable:true
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt="AYo" /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
    width: 25vw;
    height:70vh;
    .swiper{
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        background-color: ${props => props.theme.carouselColor};
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-button-next{
        color:${props => props.theme.text};
        right:0;
    }
    .swiper-button-prev{
        color:${props => props.theme.text};
        left:0;
    }
    .swiper-pagination-bullet-active{
        background-color:${props => props.theme.text};
    }
`

export default Carousel