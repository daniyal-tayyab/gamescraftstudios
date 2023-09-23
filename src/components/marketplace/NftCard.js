import React from "react";
import styled from "styled-components";

// import { ReactComponent as CubeIcon } from "../../images/marketplace/asset-icon-cube.svg";
import { ReactComponent as CartIcon } from "../../images/marketplace/shopping-cart.svg";
import { ReactComponent as Coin } from "../../images/marketplace/experience/img-coin.svg";

const Container = styled.div`
  min-width: 220px;
  max-width: 220px;
  height: 306px;
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #1b2026;
  border: 2px solid #363c44;
  cursor: pointer;

  &:last-child {
    margin-right: 3.5rem;
  }
`;

const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Cube = styled.div`
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const PowerContainer = styled.div`
  border: 1px solid #00adef;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(2, 8px);
  row-gap: 2px;
  column-gap: 5px;
  align-content: center;
  justify-content: center;
  text-align: center;
`;

export const Power = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};

  &:nth-child(3) {
    margin-left: 7px;
  }
`;

const Image = styled.img`
  height: 105px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.p`
  align-self: flex-start;
  font-size: 1.6rem;
  color: #fff;
  font-weight: 700;
`;

const Ratio = styled.p`
  align-self: flex-start;
  font-size: 1.5rem;
`;

const PriceCartConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SandPrice = styled.div`
  width: 100%;
  display: flex;
  color: #ffbf36;
  font-weight: 700;
  margin: 0.5rem 0;

  svg {
    margin-right: 5px;
  }
`;

const Price = styled.p``;

const CartContainer = styled.div`
  background-color: #2f3740;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
`;

const NftCard = ({ item }) => {
  const { color, image, title, ratio, sandPrice, price } = item;
  return (
    <Container>
      <IconsContainer>
        <Cube>
          <img
            src="https://www.sandbox.game/img/04_Content/asset-icon.svg"
            alt="cube"
          />
        </Cube>
        <PowerContainer>
          {color.map((item, index) => (
            <Power key={index} color={item} />
          ))}
        </PowerContainer>
      </IconsContainer>
      <Image src={image} alt="d" />

      <Title>{title}</Title>
      <Ratio>{ratio}</Ratio>
      <PriceCartConatiner>
        <PriceContainer>
          <SandPrice>
            <Coin />
            {sandPrice}
          </SandPrice>
          <Price>{price} USD</Price>
        </PriceContainer>
        <CartContainer>
          <CartIcon />
        </CartContainer>
      </PriceCartConatiner>
    </Container>
  );
};

export default NftCard;
