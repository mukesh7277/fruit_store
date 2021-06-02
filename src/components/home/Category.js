import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles.css";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import fruits from "../data/CategoryData";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={4}
        freeMode={true}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {fruits.map((fruit) => {
          return (
            <SwiperSlide id={fruit.id}>
              <div>
                <img src={fruit.image} alt="" />
                {fruit.name}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
