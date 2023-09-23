import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import useWindowDimensions from "../hooks/getWindowsDimensions";

import Footer from "../components/Footer";
import ImageSlide from "../components/services/ImageSlide";
import { servicesData } from "../utils/servicesData";
import HeroCommon from "../components/HeroCommon";
import CustomizedAccordions from "../components/CustomizedAccordions";

const Services = () => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }, []);

  return (
    <main className="partnership">
      <HeroCommon page="Services"/>
      <section className="partnership__services">
        <h2>Discover our <span className="gr-txt">services</span></h2>
        <Swiper
          slidesPerView={width < 710 ? "auto" : width > 710 && width < 1350 ? 2 : 1}
          spaceBetween="70px"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {servicesData.map((item, index) => (
            <SwiperSlide key={index}>
              <ImageSlide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="partnership__section">
        {
          servicesData.map((service, index) => {
            const {title, services} = service;
            return (
              <>
                <h2 className="section-heading">{title}</h2>
                <CustomizedAccordions services={services} />
              </>
            );
          })
        }
      </section>
      <Footer />
    </main>
  );
};

export default Services;
