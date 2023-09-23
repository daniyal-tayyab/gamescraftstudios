import React, { useEffect } from 'react'

import gsap from 'gsap';

import ServiceCard from './service-card/ServiceCard';

import { services } from '../../utils/services';
import { MdExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import { homeServices } from '../../utils/home-services';


const Services = ({ reference }) => {
    useEffect(() => {
        const element = reference.current;
        gsap.fromTo(
          element.querySelector('.services-card-section'),
          {
            display: 'none',
            opacity: 0,
            y: 100
          }, 
          {
            display: 'block',
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: element.querySelector(".section-heading"),
              start: "100px center",
              end: "100px top",
              scrub: true
            }
          }
        );
      }, []);
      console.log(homeServices);

  return (
    <section className='home-services'>
      <div className='heading-container'>
        <h2 className='heading-aside'>Our<span className='heading-span'> Services</span></h2>
        <Link to="/services">
          <p className='see-all'>See all <span className='gr-txt'><MdExpandMore /></span></p>
        </Link>
      </div>
      <section className='services-card-section'>
        {/* {services.map((service, index) => <ServiceCard key={index} service={service} />)} */}
        {homeServices.map((service, index) => <ProductCard key={index} service={service} />)}
      </section>
    </section>
  )
}

export default Services;
