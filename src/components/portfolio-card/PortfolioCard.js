import React from 'react'

import { Container, ImageContainer, ContentContainer } from './PortfolioCard.styles';
import Button from "../Button";
import { Link } from 'react-router-dom';

const PortfolioCard = ({ game }) => {
  const { image, name, genre, releaseDate, rating, price } = game;
  return (
    <Container>
      <ImageContainer img={image}/>
      <ContentContainer className='game-card-content'>
        <h3>{name}</h3>
        <p>{genre}</p>
        <p>Release Date: {releaseDate}</p>
        <Button><Link to="/portfolio">View More</Link></Button>
      </ContentContainer>
    </Container>
  )
}

export default PortfolioCard