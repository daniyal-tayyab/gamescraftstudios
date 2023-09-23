import React, {useEffect} from "react";

import HeroCommon from "../components/HeroCommon";

import Footer from "../components/Footer";
import PortfolioSection from "../components/portfolio/PortfolioSection";

import {portfolio} from "../utils/portfolio";


const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: "smooth"});
  }, []);
  return (
    <main className="news">
      <HeroCommon page="Portfolio" />
      <PortfolioSection games={portfolio} />
      <Footer />
    </main>
  );
};

export default Portfolio;
