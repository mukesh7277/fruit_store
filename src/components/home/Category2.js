import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles2.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import fruits from "../data/CategoryData";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        freeMode={true}
        loop={true}
        spaceBetween={5}
        autoplay={{
          delay: 1400,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        style={{ width: 900 }}
      >
        {fruits.map((fruit) => {
          return (
            <SwiperSlide id={fruit.id}>
              <div>
                <img
                  style={{ height: 70, width: 70, position: "absolute" }}
                  src="https://e7.pngegg.com/pngimages/631/660/png-clipart-red-encapsulated-postscript-20-off-label-text.png"
                />
                <img src={fruit.image} alt="" />

                <h6 style={{ marginTop: 5 }}>{fruit.name}</h6>
                <div
                  style={{
                    display: "flex",
                    marginTop: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h5 style={{ fontWeight: "bold", marginRight: 5 }}>$30</h5>
                  <h6 style={{ fontSize: 12, textDecoration: "line-through" }}>
                    $40
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
