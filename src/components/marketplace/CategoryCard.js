import React from "react";

import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 60%;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0) 0,
    ${(props) => props.color} 100%
  );
  padding: 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: all 0.15s;

  @media (max-width: 850px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 1rem;
  position: relative;
  height: 100px;
  overflow: hidden;

  cursor: pointer;

  img {
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
  }

  &:hover > ${Content} {
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0) 0,
      ${(props) => props.color} 50%
    );
  }
`;

const CategoryCard = ({ item }) => {
  const { title, image, color } = item;
  return (
    <Container color={color}>
      <Content color={color}>{title}</Content>
      <img src={image} alt={title} />
    </Container>
  );
};

export default CategoryCard;
