import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";

import video from "../../videos/hero.mp4";
import logo from "../../images/logo-full.png";

export const Container = styled.div`
  width: calc(100vw - 55px);
  height: 47rem;
  /* height: 100vh; */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  video {
   filter: brightness(40%);
  }

  @media (max-width: 900px) {
    width: 100vw;
  }

  @media (max-width: 700px) {
    height: 70rem;
  }
`;

export const Content = styled.div`
  position: absolute;
  left: 8rem;
  top: 10rem;
  width: 35%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .heading-aside {
    font-size: 6rem;
    margin-bottom: 0;
    font-weight: 500;
  }

  img {
    width: 300px;
  }

  button {
    margin-top: 2rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 900px) {
    top: 5rem;
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 80%;
    top: 15rem;
    left: 5rem;
  }

  @media (max-width: 400px) {
    left: 3rem;
  }
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  margin: 0.8rem 0;
  margin-top: 2.5rem;
`;

const Description = styled.p`
  font-size: 14px;
`;

const SlideOne = () => {
  return (
    <Container>
      <video
        src={video}
        loop="loop"
        autoPlay="autoplay"
        playsInline
        muted="muted"
        preload="auto"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      ></video>
      <Content>
        <img
          src={logo}
          alt="logo"
        />
        {/* <p className="heading-aside">Games<span className="gr-txt">Craft</span></p> */}
        <Heading>Your Game, Your Vision – Our Expertise</Heading>
        <Description>
          Welcome to gamescraft studio, where creativity knows no bounds, and every click, tap, or swipe leads to a new adventure!
        </Description>
        <Button buttonType="inverted">
          <Link to="/avatar" style={{ color: "#fff" }}>
            Let's Create Together
          </Link>
        </Button>
      </Content>
    </Container>
  );
};

export default SlideOne;
