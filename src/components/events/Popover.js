import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 10px;
  background-color: #000;
  border-radius: 10px;
  gap: 2rem;

  img {
    width: 150px;
    height: 100px;
    border-radius: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.div``;

const Location = styled.div`
  padding: 1.5rem;
  background-color: #28283a;
  color: #0c6d2d;
  display: flex;
  align-items: center;
  height: 20px;
  width: fit-content;
  border-radius: 5px;

  img {
    width: 16px;
    margin-right: 1rem;
  }
`;

const Mode = styled.div`
  padding: 1rem;
  color: #0c6d2d;
  display: flex;
  align-items: center;
  height: 20px;

  img {
    width: 16px;
    margin-right: 1rem;
  }
`;

const Popover = () => {
  return (
    <Container>
      <img
        src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/https://api.sandbox.game/experiences/378db495-5b63-49fe-b7ed-7f825ca63d0f/versions/dc4a6640-ee7c-4c26-b798-38da5f30a42d/banner"
        alt="alt"
      />
      <Content>
        <Title>Moballs Slime Fight</Title>
        <Location>
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/map-pin.svg"
            alt="location"
          />
          <span>6, 1</span>
        </Location>
        <Mode>
          <img
            src="https://www.sandbox.game/img/26_Season/multiplayer.svg"
            alt="mode"
          />
          <span>Single Player</span>
        </Mode>
      </Content>
    </Container>
  );
};

export default Popover;
