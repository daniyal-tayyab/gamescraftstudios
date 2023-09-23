import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
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
      font-size: 13px;
      /* width: 80%; */
      margin-top: 1rem;

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

const ReverseGrid = () => {
  return (
    <Container>
      <div>
        <h2>How do I work with The Sandbox' Agency Partners?</h2>
        <p>
          If you have industry-specific challenges or are new to the metaverse,
          don’t worry! See which Agency Partners meet your needs and contact
          them, all in our Agency Partners directory.
        </p>
      </div>
      <div>
        <img
          src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=720/img/37_Builders_Page/expert-banner02.webp"
          alt="partner"
        />
      </div>
    </Container>
  );
};

export default ReverseGrid;
