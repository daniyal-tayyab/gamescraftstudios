import React from "react";
import { Link } from "react-router-dom";

const socialIcons = [
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/discord.svg",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/telegram.svg",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/twitter.svg",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/instagram.svg",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/facebook.svg",
];

const NewsHero = () => {
  return (
    <section className="news-hero">
      <Link to="/" className="news-hero__back">
        <img
          src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/Arrow.svg"
          alt="back"
        />
        <span>BACK</span>
      </Link>
      <div className="news-hero__header">
        <h1>The Sandbox Community</h1>
        <div className="news-hero__header--right">
          <div className="news-hero__header--right__search">
            <div className="news-hero__header--right__search__icon">
              <img
                src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/search.svg"
                alt="search"
              />
            </div>
            <input
              type="text"
              placeholder="Search article"
              className="news-hero__header--right__search__input"
            />
          </div>
          <div className="news-hero__header--right__social">
            {socialIcons.map((item, index) => (
              <img key={index} src={item} alt={`item${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="news-hero__grid">
        <div className="news-hero__grid__image">
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=735/https://strapi.sandbox.game/uploads/1_SGWO_2tunztea_A_Fgj_Y6_H_Ifw_e8e331724e.png"
            alt="hero"
          />
        </div>
        <div className="news-hero__grid__content">
          <div className="news-hero__grid__content__upper">
            <h2>CREATE</h2>
            <h3>Welcome to VOXEL WARS!</h3>
            <p>
              A brand new show coming to our Sandbox Streams and we want YOU to
              be a part of it!
            </p>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
