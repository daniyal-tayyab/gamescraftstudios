import React from "react";

import styled from "styled-components";

const Container = styled.div`
  min-width: 220px;
  max-width: 220px;
  height: 290px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 10px 12px;
  color: #fff;
`;

const Title = styled.div`
  font-size: 1.3rem;
  width: 100%;

  display: flex;
  justify-content: space-between;

  h3 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  img {
    width: 2rem;
  }
`;

const AssetCount = styled.p`
  font-size: 1.2rem;
`;

const By = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;

  span {
    color: #0d5aa2;
    margin: 0 5px;
  }

  img {
    width: 1.5rem;
  }
`;

const LogoCard = ({ item }) => {
  const { bg, image, title, assetsCount, by } = item;

  return (
    <Container>
      <BgImage bg={bg} />
      {image && <Image src={image} alt="title" />}
      <ContentContainer>
        <Title>
          <h3>{title}</h3>
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=15,h=15/img/Icons/iconVerified.svg"
            alt="tick"
          />
        </Title>
        <AssetCount>{assetsCount} Assets</AssetCount>
        {by && (
          <By>
            by <span>{by}</span>
            <img
              src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=15,h=15/img/Icons/iconVerified.svg"
              alt="tick"
            />
          </By>
        )}
      </ContentContainer>
    </Container>
  );
};

export default LogoCard;
