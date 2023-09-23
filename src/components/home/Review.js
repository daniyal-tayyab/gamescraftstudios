import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import StoryCard from './story-card/StoryCard';
import { review } from '../../utils/reviewdata';

const Container = styled.section`
    margin: 8rem;
    position: relative;

    .swiper {
      .swiper-button-prev, .swiper-button-next {
        display: none;
      }
    }

    h2 {
      margin: 0 auto;
      margin-bottom: 4rem;
    }

    @media (max-width: 500px) {
      margin: 8rem 3rem;
    }
`;

const Review = () => {
  return (
    <Container>
      <h2 className='section-heading'>What people say<Link to="/about"><span className='heading-span'> about us</span></Link></h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {review.map((item,index) => <SwiperSlide key={index}><StoryCard item={item}/></SwiperSlide>)}
      </Swiper>
    </Container>
  );
}

export default Review
