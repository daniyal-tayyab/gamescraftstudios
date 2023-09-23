import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        {/* <SwiperSlide>
          <SlideTwo />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default HomeHero;
