import { Rating } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #f07f27;
  padding: 5px;
  cursor: pointer;
  height: 550px;

  h3 {
    margin: 5px 0;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
    margin: 5px 0;
    color: #818488;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 400px;
  /* object-fit: cover; */

  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

const GameCard = ({ item }) => {
  const { id,image, name, desc, rating } = item;

  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }, []);

  return (
    <Link to={`/single-game/${id}`}>
      <Container>
        <Image bg={image} />
        <h3>{name}</h3>
        <Rating defaultValue={rating} readOnly />
        <p>{desc}</p>
      </Container>
    </Link>
  );
};

export default GameCard;
