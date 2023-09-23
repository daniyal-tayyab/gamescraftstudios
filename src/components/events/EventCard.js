import React, { useState } from "react";

import styled from "styled-components";

import Tag from "./Tag";
import { ReactComponent as CalenderIcon } from "../../images/marketplace/calendar-icon.svg";

const Description = styled.p`
  display: none;
  opacity: 0;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;

  transition: all 1s;
`;

const Container = styled.div`
  height: 32rem;
  width: 100%;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  font-weight: 600;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.15;

  &:hover > div:first-child {
    transform: scale(1.2);
  }

  &:hover {
    border: 2px solid #8e8e91;
  }

  &:hover ${Description} {
    opacity: 1;
    display: -webkit-box;
  }
`;

const Background = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.15s;
`;

const TagsContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  column-gap: 1rem;
`;

const Image = styled.img`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%);
  width: 50%;
`;

const Content = styled.div`
  width: 100%;
  padding: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);

  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Reward = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  img {
    width: 24px;
    margin-right: 5px;
    margin-bottom: -5px;
  }
`;

const Date = styled.div`
  width: 100%;
  color: #8e8e91;
  font-size: 1.3rem;
  font-weight: 700;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CalenderContainer = styled.div`
  background-color: hsla(0, 0%, 100%, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
`;

const EventCard = ({ item }) => {
  const [cardHover, setCardHover] = useState(false);
  const { type, bg, image, title, description, reward, rewardIcon, endsDate } =
    item;

  const handleHover = () => setCardHover((prevState) => !prevState);

  return (
    <Container onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Background bg={bg} />
      <TagsContainer>
        {typeof type !== "string" ? (
          type.map((item, index) => (
            <Tag type={item} key={index}>
              {item}
            </Tag>
          ))
        ) : (
          <Tag type={type}>{type}</Tag>
        )}
      </TagsContainer>
      <Image src={image} alt="brand" />
      <Content>
        <Title>{title}</Title>
        {description && (
          <Description hover={cardHover}>{description}</Description>
        )}
        {reward && (
          <Reward>
            Reward: <img src={rewardIcon} alt="reward" />
            <span>{reward}</span>
          </Reward>
        )}
        {endsDate && (
          <Date>
            ENDS: {endsDate}{" "}
            <CalenderContainer>
              <CalenderIcon />
            </CalenderContainer>
          </Date>
        )}
      </Content>
    </Container>
  );
};

export default EventCard;
