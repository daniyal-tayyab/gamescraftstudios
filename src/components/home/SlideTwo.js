import React from "react";

import Button from "../Button";

import { Container } from "./SlideOne";
import styled from "styled-components";

import homeHero from "../../images/homehero.png";

const HeroImage = styled.div`
  min-height: 100%;
  min-width: 100%;
  background-image: url(${homeHero});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  position: absolute;
  left: 8rem;
  top: 3rem;
  width: 40%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 80%;
    left: 5rem;
    top: 8rem;
  }

  @media (max-width: 500px) {
    left: 3rem;
    top: 5rem;
    width: 90%;
  }
`;

const LiveEvent = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const LiveEventButton = styled.div`
  padding: 3px 10px;
  background-color: #2edb77;
  border-radius: 5px;
  margin-right: 1rem;
`;

const Live = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  div {
    width: 5px;
    height: 5px;
    padding: 2px;
    background-color: #d32027;
    border-radius: 50%;
    margin-right: 5px;
    margin-left: 5px;
  }
`;

const LiveEventDuration = styled.div`
  word-spacing: 2px;
`;

const FestivalImage = styled.img`
  width: 80%;
  margin: 4rem 0;
  margin-bottom: 3rem;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 2rem;
`;

const Points = styled.ul`
  list-style: none;
  font-size: 1.4rem;

  @media (max-width: 600px) {
    margin-top: 1rem;
    font-size: 12px;
  }
`;

const Reward = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 0.8rem;

  img {
    margin: 0 5px;
  }
  span {
    font-size: 2rem;
    margin-bottom: 2px;
  }

  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;

  button:nth-child(1) {
    padding: 0.8rem 9rem;
  }

  @media (max-width: 600px) {
    margin-top: 4rem;
  }
`;

const CalenderButton = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;

  background-color: rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SlideTwo = () => {
  return (
    <Container>
      <HeroImage />
      <Content>
        <LiveEvent>
          <LiveEventButton>Special</LiveEventButton>
          <Live>
            <div>&nbsp;</div>
            Live
          </Live>
          <LiveEventDuration>Open Unitl June 12th</LiveEventDuration>
        </LiveEvent>
        <FestivalImage
          src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,w=768/https://api.sandbox.game/social-events/202/logo"
          alt="logo"
        />
        <Heading>join the may festivities!</Heading>
        <Points>
          <li>
            ☀️Celebrate all things old and new in The Sandbox May Festival!
          </li>
          <li>
            ☀️Immerse yourselft in the arrival of Spring and dive in the
            Metaverse to discover new experiences and some of the most...
          </li>
        </Points>
        <Reward>
          Reward Pool:{" "}
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect/https://api.sandbox.game/social-event-rewards/19/logo"
            alt="mystry box"
            style={{ width: "24px" }}
          />
          <span>1</span> MAY MYSTRY BOX
        </Reward>
        <ButtonSection>
          <Button buttonType="inverted">Play</Button>
          <CalenderButton>
            <img
              src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect/img/14_Home/calendar-icon.svg"
              alt="calender"
            />
          </CalenderButton>
        </ButtonSection>
      </Content>
    </Container>
  );
};

export default SlideTwo;
