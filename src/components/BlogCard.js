import React, { useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.5)
    ),
    url(${(props) => props.image});

  height: 100%;
  background-position: top;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;

  &:hover {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.5)
      ),
      url(${(props) => props.image});
  }
`;

const BlogCard = ({ item }) => {
  const [cardHover, setCardHover] = useState(false);

  const handleCardHover = () => setCardHover((prevState) => !prevState);

  const { backgroundImage, title, description } = item;

  return (
    <div
      className="blog-card"
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardHover}
    >
      <Wrapper image={backgroundImage}>
        <div className="blog-card__new-button">What's new!</div>
        <h3 className=" blog-card__title">{title}</h3>
        {cardHover && <p className="blog-card__description">{description}</p>}
      </Wrapper>
    </div>
  );
};

export default BlogCard;
