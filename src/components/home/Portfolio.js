import React from 'react'
import PortfolioCard from '../portfolio-card/PortfolioCard';

import { portfolio } from "../../utils/portfolio.js";

import { MdExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className='home-portfolio'>
      <div className='heading-container'>
        <h2 className='heading-aside'>Our <span className='heading-span'>Work</span></h2>
        <Link to="/portfolio">
          <p className='see-all'>See all <span className='gr-txt'><MdExpandMore /></span></p>
        </Link>
      </div>
      <div className='portfolio-section'>
        {portfolio.map((game, index) => <PortfolioCard key={index} game={game}/>)}
      </div>
    </section>
  );
}

export default Portfolio;