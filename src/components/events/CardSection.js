import React from "react";

import styled from "styled-components";
import EventCard from "./EventCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 4rem;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardSection = ({ item }) => {
  const { title, events } = item;

  return (
    <Container>
      <Title>{title}</Title>
      <Grid>
        {events.map((item, index) => (
          <EventCard key={index} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default CardSection;
