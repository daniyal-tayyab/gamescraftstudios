import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import HeroCommon from '../components/HeroCommon';

import { portfolio } from '../utils/portfolio';
import { Rating } from '@mui/material';
import Footer from '../components/Footer';
import Button from '../components/Button';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;

    img {
      height: 500px;
      width: 90%;
      object-fit: contain;

      @media (max-width: 750px) {
        width: 100%;
      }
    }

    h2 {
      font-size: 25px;
      /* width: 80%; */
      margin-top: 2rem;

      @media (max-width: 600px) {
        font-size: 18px;
        width: 100%;
      }
    }

    p {
      font-size: 1.5rem;
      /* width: 80%; */
      margin: 1rem 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      &:last-child {
        margin: 0;
      }

      @media (max-width: 600px) {
        font-size: 11px;
        width: 100%;
      }
    }
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const SingleGame = () => {
  const {id} = useParams(null);
  const [game, setGame] = useState({});

  useEffect(() => {
    setGame(portfolio[id]);
  }, []);

  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: "smooth"});
  }, []);

  const {name, image, desc, genre, releaseDate, rating, price, link} = game;
//   console.log("RATING: ", typeof Number(rating));
  return (
    <main className='single-game'>
        <HeroCommon page={name}/>
        <div className='game-content'>
            <Container>
                <div>
                    <img src={image} alt={name} />
                    {/* <img src="https://i.ibb.co/26HPJyx/homehero.png" alt={name} /> */}
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <Rating defaultValue={5} size="large" readOnly />
                    <p style={{fontSize: "1.5rem"}}>Price: <span className='gr-txt'>${price}</span></p>
                    <p>Genre: <span className='gr-txt'>{genre}</span></p>
                    <p>Release Date: <span className='gr-txt'>{releaseDate}</span></p>
                    <a href={link} target="_blank">
                      <Button buttonType="default">Play now</Button>
                    </a>
                </div>
            </Container>
        </div>
        <div className='lower-content'>
            <div className='heading'>
                <h3>Game Description</h3>
                <p>{desc}</p>
                <a href={link} target='_blank'>
                  <Button buttonType="default">View more</Button>
                </a>
            </div>
        </div>
        <Footer />
    </main>
  )
}

export default SingleGame