import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;

  h3 {
    color: #017aec;
    margin: 5px 0;
  }

  p {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 5px 0;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 270px;

  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

const ArticleCard = ({ item }) => {
  const { image, title } = item;
  return (
    <Container>
      <Image bg={image} />
      <h3>ANNOUNCEMENTS</h3>
      <p>{title}</p>
      <div className="news-hero__grid__content__lower">
        <div className="news-hero__grid__content__lower__time">
          Jun 08, 2023 - 0 min read
        </div>
        <div className="news-hero__grod__content__lower__social">
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/twitter.svg"
            alt="twitter"
          />
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/facebook.svg"
            alt="facebook"
          />
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/telegram.svg"
            alt="telegram"
          />
        </div>
      </div>
    </Container>
  );
};

export default ArticleCard;
