import React from "react";

import styled from "styled-components";
import Slider from "./Slider";

import arrowMore from "../../images/arrow-button.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #abb1b4;
  margin-top: 8rem;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
  }

  span {
    font-size: 1.5rem;
    font-weight: 300;
    margin-left: 2rem;
  }
`;

const Description = styled.p`
  text-align: left;
  font-size: 1.3rem;
  margin-top: 1rem;
`;

const TagsContainer = styled.div`
  margin-top: 0.3rem;
`;

const Explore = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  p {
    font-weight: 700;
  }

  span {
    margin-left: 1rem;
    margin-bottom: -5px;
    cursor: pointer;
  }
`;

const CardSlider = styled.div``;

const SwiperSection = ({ item }) => {
  const { title, count, description, tags, explore, cardsData, cardType } =
    item;

  return (
    <Container>
      <Title>
        <h2>{title}</h2>
        <span>({count})</span>
      </Title>
      {description && <Description>{description}</Description>}
      {tags && (
        <TagsContainer>
          <Slider item={tags} type="tag" />
        </TagsContainer>
      )}
      {explore && (
        <Explore>
          {explore}
          <span>
            <img src={arrowMore} alt="more" />
          </span>
        </Explore>
      )}
      <CardSlider>
        <Slider item={cardsData} type={cardType} />
      </CardSlider>
    </Container>
  );
};

export default SwiperSection;
