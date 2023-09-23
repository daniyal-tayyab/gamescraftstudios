import React from "react";

const Streaming = () => {
  return (
    <section className="streaming">
      <div className="streaming__left">
        <div className="streaming__header">
          <div className="streaming__header__title">
            <p>
              Streaming
              <img
                src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/blog/twitch.svg"
                alt="streaming"
              />
            </p>
          </div>
          <div className="streaming__header__readmore">Read more</div>
        </div>
        <div className="streaming__left__content">
          <div className="streaming__left__content__info">
            <p>
              <span>TheSandboxGame</span> is offline.
            </p>
            <p>Learn more about the them on their channel!</p>
            <p>Visit TheSandboxGame</p>
          </div>
        </div>
      </div>
      <div className="streaming__right">
        <div className="streaming__header">
          <div className="streaming__header__title">
            <p>
              Latest Videos
              <img
                src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/blog/youtube.svg"
                alt="streaming"
              />
            </p>
          </div>
          <div className="streaming__header__readmore">Read more</div>
        </div>
        <div className="streaming__right__videos">
          <div className="streaming__right__videos__video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed?v=OzUAbzL92BM&feature=youtu.be"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="video"
            />
          </div>
          <div className="streaming__right__videos__video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed?v=qPVumlluz_4&feature=youtu.be"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streaming;
