import React, { useRef } from "react";

import styled, { css } from "styled-components";

import Tag from "./Tag";
import NftCard from "./NftCard";
import LogoCard from "./LogoCard";
import BgCard from "./BgCard";

import { ReactComponent as NextIcon } from "../../images/marketplace/iconNext.svg";

const commonStyles = css`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30px;
  cursor: pointer;
  z-index: 10;

  span {
    width: 100%;
    background-color: #2b2f34;
    border-radius: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 2rem;
`;

const PrevButton = styled.div`
  ${commonStyles};
  transform: rotate(180deg);
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
`;

const NextButton = styled.div`
  ${commonStyles};
  position: absolute;
  height: 100%;
  right: 0rem;
  top: 0;
`;

const SliderWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  column-gap: 2rem;
  scroll-behavior: smooth;
  margin-left: ${(props) => (props.type === "tag" ? "3.5rem" : "0")};
`;

const Slider = ({ item, type }) => {
  console.log(type, item);
  const sliderRef = useRef(null);

  const handleNextClick = () => {
    let width = sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + width;
  };

  const handlePrevClick = () => {
    let width = sliderRef.current.clientWidth;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - width;
  };

  return (
    <Container>
      <SliderWrapper className="slider-container" ref={sliderRef} type={type}>
        {item &&
          item.map((item, index) =>
            type === "tag" ? (
              <Tag item={item} key={index} />
            ) : type === "exp-card" ? (
              <NftCard item={item} key={index} />
            ) : type === "logo-card" ? (
              <LogoCard item={item} key={index} />
            ) : (
              <BgCard item={item} key={index} />
            )
          )}
      </SliderWrapper>
      <PrevButton onClick={handlePrevClick} type={type}>
        <NextIcon />
      </PrevButton>
      <NextButton onClick={handleNextClick} type={type}>
        <NextIcon />
      </NextButton>
    </Container>
  );
};

export default Slider;
