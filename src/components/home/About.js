import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Link} from "react-router-dom";

import Button from '../Button';

import logo from "../../images/logou.png";



const About = ({reference}) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = reference.current;
    gsap.fromTo(
      element.querySelector('.left'),
      {
        display: 'none',
        opacity: 0,
        y: -400
      }, 
      {
        display: 'block',
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".about"),
          start: "400px center",
          end: "400px top",
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = reference.current;
    gsap.fromTo(
      element.querySelector('.right'),
      {
        opacity: 0,
        y: 400
      }, 
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".about"),
          start: "400px center",
          end: "400px top",
          scrub: true
        }
      }
    );
  }, []);


  return (
    <section className='home-about'>
        <div className='left'>
          <img src={logo} alt="globe" />
        </div>
        <div className='right'>
            <h2 className='section-heading'>ABOUT <span className='heading-span'>Us</span></h2>
            <p className='desc'>"Redefining the Future with <span className='gr-txt'>Creativity</span>, <span className='gr-txt'>Passion</span>, and <span className='gr-txt'>Integrity</span>"</p>
            <span className='para'>Welcome to GamesCraft Studio, where creativity meets innovation in the world of mobile gaming! Our Creative Team at GamesCraft Studio, we're a talented ensemble of developers,  3D artists and animators who breathe life into virtual worlds. With expertise in industry-standard software like Unity, Unreal Engine, Blender, Maya, 3ds Max, and more, our creative team is poised to take your gaming experience to the next level.</span>
            <Button buttonType="inverted"><Link to="/about">Learn More</Link></Button>
        </div>
    </section>
  )
}

export default About