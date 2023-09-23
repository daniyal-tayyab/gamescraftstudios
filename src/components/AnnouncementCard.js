import React from "react";

import styled from "styled-components";

const CardImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  min-width: 150px;
  height: 100%;

  @media (max-width: 1400px) {
    min-width: 120px;
  }

  @media (max-width: 1200px) {
    min-width: 100px;
  }

  @media (max-width: 1000px) {
    min-width: 140px;
  }

  @media (max-width: 400px) {
    min-width: 110px;
  }
`;

const AnnouncementCard = ({ item }) => {
  const { backgroundImage, title, heading, info } = item;

  return (
    <div className="announcement-card">
      <CardImage image={backgroundImage}></CardImage>
      <div className="announcement-card__content">
        <h4 className="announcement-card__content__title">{title}</h4>
        <p className="announcement-card__content__heading">{heading}</p>
        <p className="announcement-card__content__info">{info}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
