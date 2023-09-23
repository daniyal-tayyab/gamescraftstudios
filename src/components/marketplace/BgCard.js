import React from "react";

import styled from "styled-components";

const Conatainer = styled.div`
  min-width: 220px;
  max-width: 220px;
  height: 290px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #1b2026;
  cursor: pointer;
  position: relative;
  border: 2px solid #363c44;

  &:last-child {
    margin-right: 3.5rem;
  }
`;

const BgImage = styled.div`
  width: 100%;
  height: 50%;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 10px 12px;
  color: #fff;
  margin-top: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  width: 100%;
  font-weight: 700;
`;

const Location = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  color: #04c940;

  img {
    width: 10px;
    height: 12px;
    margin-right: 5px;
  }
`;

const BgCard = ({ item }) => {
  const { bg, longLat } = item;

  return (
    <Conatainer>
      <BgImage bg={bg} />
      <ContentContainer>
        <Title>LAND {longLat}</Title>
        <Location>
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/16_Presale/marker.svg"
            alt="location"
          />
          {longLat}
        </Location>
      </ContentContainer>
    </Conatainer>
  );
};

export default BgCard;
