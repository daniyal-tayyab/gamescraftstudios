import React from "react";

import GameCard from "./GameCard";

const PortfolioSection = ({games}) => {
  return (
    <section className="maker">
      <div className="maker__heading">
        <h2 className="section-heading">Our <span className="gr-txt">Games</span></h2>
      </div>
      <div className="maker__grid">
        {games.map((item, index) => (
          <GameCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
