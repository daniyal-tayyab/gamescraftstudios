import React from 'react'
import styled from "styled-components";
import StatsComponents from '../StatsComponents';

const Container = styled.section`
    margin: 8rem ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;

    h1 {
        margin-bottom: 2rem;
    }

    p:first-child {
      font-size: 1.6rem;
    }

    p {
        margin: 0 auto;
        margin-bottom: 1rem;
        font-size: 1.4rem;
    }

    h2 {
      margin-top: 2rem;
      width: 100%;
      margin-bottom: 1rem;
    }

    @media (max-width: 700px) {
      margin: 8rem 4rem;
    }

    @media (max-width: 500px) {
      margin: 8rem 2rem;
    }
`;

const Heading = styled.h2`
  margin: 8rem 0;

  @media (max-width: 500px) {
    margin: 4rem 0;
    font-size: 3.5rem;
  }
`;

const AboutContent = () => {
  return (
    <>
      <Container>
      {/* <h1 className='sub-heading txt-center'>About <span className='gr-txt'>Us</span></h1> */}
      <p>Welcome to <span className='gr-txt'>GamesCraft Studio</span>, where creativity meets innovation in the world of mobile
        gaming! Our Creative Team at GamesCraft Studio, we're a talented ensemble of developers,
        3D artists and animators who breathe life into virtual worlds. With expertise in
        industry-standard software like Unity, Unreal Engine, Blender, Maya, 3ds Max, and more, 
        our creative team is poised to take your gaming experience to the next level.
      </p>
      <h2 className='sub-heading'>Our <span className='gr-txt'>Story</span></h2>
      <p>GamesCraft Studio was born from a shared love for gaming and a desire to bring fresh,
         exciting, and immersive mobile games to the fingertips of gamers everywhere. Our journey
         began with a simple idea: to create games that captivate, challenge, and inspire.
         Over the years, we've honed our skills, learned from every project, and evolved into a 
         formidable force in the gaming industry.</p>
      <h2 className='sub-heading'>Our <span className='gr-txt'>Mission</span></h2>
      <p>At GamesCraft Studio, our mission is clear: to craft games that entertain, engage, and elevate. We believe that gaming is more than just a pastime; it's a way to connect, to explore new worlds, and to experience stories like never before. We're committed to pushing the boundaries of what mobile gaming can achieve, always striving for excellence in every game we create.</p>
      <h2 className='sub-heading'>Our <span className='gr-txt'>Expertise</span></h2>
      <p>We understand that every project is unique, and we're here to bring your vision to fruition. Whether you need stunning 3D assets, realistic character animations, or mind-blowing special effects, our creative team collaborates closely with you to ensure your game stands out in a crowded market.</p>
    </Container>
    <Heading className='heading-about'><span className='gr-txt'>8 Years</span> of Experience</Heading>
    <StatsComponents />
    </>
  )
}

export default AboutContent
