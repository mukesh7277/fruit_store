import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay]);

export default function LatestProducts() {
  return (
    <div className="scrollbody" style={{ width: "43%" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="scrollItem">
          <div>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: 80, width: 80 }}
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg"
                alt=""
              />
              <div>
                <p>Crab Pool Security</p>
                <span>$30.00</span>
              </div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <img
                style={{ height: 80, width: 80 }}
                src="https://nhncwtttsf-flywheel.netdna-ssl.com/6/wp-content/uploads/sites/29/2019/01/Eat-Vegetables.jpg"
                alt=""
              />
              <div>
                <p>Crab Pool Security</p>
                <span>$30.00</span>
              </div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <img
                style={{ height: 80, width: 80 }}
                src="https://media.architecturaldigest.com/photos/5e8646644395cf0008add3d5/1:1/w_2014,h_2015,c_limit/GettyImages-678817847.jpg"
                alt=""
              />
              <div>
                <p>Crab Pool Security</p>
                <span>$30.00</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="scrollItem">
          <div>
            <div style={{ display: "flex" }}>
              <img
                style={{ height: 80, width: 80 }}
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg"
                alt=""
              />
              <div>
                <p>Crab Pool Security</p>
                <span>$30.00</span>
              </div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <img
                style={{ height: 80, width: 80 }}
                src="https://nhncwtttsf-flywheel.netdna-ssl.com/6/wp-content/uploads/sites/29/2019/01/Eat-Vegetables.jpg"
                alt=""
              />
              <div>
                <p>Crab Pool Security</p>
                <span>$30.00</span>
              </div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <img
                style={{ height: 80, width: 80 }}
                src="https://media.architecturaldigest.com/photos/5e8646644395cf0008add3d5/1:1/w_2014,h_2015,c_limit/GettyImages-678817847.jpg"
                alt=""
              />
              <div>
                <p>Crab Pool Security</p>
                <span>$30.00</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
