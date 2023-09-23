import React from "react";

import styled from "styled-components";

const Container = styled.div`
  max-width: 508px;
  min-width: 508px;
  min-height: 439px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h5 {
    font-size: 2.2rem;
    margin: 1rem 0;
  }

  p {
    font-size: 1.3rem;
    font-weight: normal;
  }

  @media (min-width: 1350px) {
    max-width: 80vw;
    min-width: 80vw;
    min-height: 700px;

    h5 {
      font-size: 2.8rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 1260px) {
    max-width: 480px;
    min-width: 480px;
  }

  @media (max-width: 1220px) {
    max-width: 450px;
    min-width: 450px;
  }

  @media (max-width: 1030px) {
    max-width: 420px;
    min-width: 420px;
  }

  @media (max-width: 1030px) {
    max-width: 400px;
    min-width: 400px;
  }

  @media (max-width: 790px) {
    max-width: 380px;
    min-width: 380px;
  }

  @media (max-width: 750px) {
    max-width: 360px;
    min-width: 360px;
  }

  @media (max-width: 710px) {
    max-width: calc(100vw - 30px);
    min-width: calc(100vw - 30px);

    h5 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 258px;
  object-fit: cover;
  border-radius: 10px;
  background: url(${props => props.bg});
  background-position: ${props => props.pos};
  background-size: cover;


  
  @media (min-width: 1350px) {
    min-height: 500px;
  }

  @media (min-width: 1600px) {
    min-height: 660px;
  }


`;

const ImageSlide = ({ item }) => {
  return (
    <Container>
      {/* <Image src={item.image} alt="nan" /> */}
      <Image bg={item.image} pos={item.pos} />
      <h5>{item.title}</h5>
      <p>{item.desc}</p>
    </Container>
  );
};

export default ImageSlide;
