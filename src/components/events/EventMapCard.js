import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 10px;
  }

  p {
    font-size: 1.4rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #fff;
  max-width: 340px;

  img {
    height: 50%;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 2rem;
    padding: 0 1rem;
  }

  p {
    font-size: 1.2rem;
    padding: 0 1rem;
    margin: 1rem 0;
  }

  div {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    padding-bottom: 1rem;

    img {
      width: 20px;
    }

    p {
      span {
        color: #089df6;
      }
    }

    button {
      padding: 1rem 3rem;
      border-radius: 20px;
      border: 1px solid #fff;
      background-color: transparent;
      color: #fff;
      font-size: 1.4rem;
      cursor: pointer;
      margin-left: auto;
      transition: all 0.15s;

      &:hover {
        background-color: #089df6;
        border: 1px solid transparent;
      }
    }
  }
`;

const EventMapCard = ({ item }) => {
  const { heading, image, title, desc } = item;
  return (
    <Container>
      <Title>
        <div />
        <p>{heading}</p>
      </Title>
      <Card>
        <img src={image} alt="event" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <div>
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/26_Season/Alpha_3/the-sandbox-small-logo.png"
            alt="alt"
          />
          <p>
            By <span>The Sandbox</span>
          </p>
          <button>Play</button>
        </div>
      </Card>
    </Container>
  );
};

export default EventMapCard;
