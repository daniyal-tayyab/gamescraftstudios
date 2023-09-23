import React, {useEffect} from "react";

import Button from "../components/Button";
import { jobs } from "../utils/job";

import HeroCommon from "../components/HeroCommon";
import Footer from "../components/Footer";

const Carrer = () => {
  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: "smooth"});
  }, []);
  return (
    <>
      <HeroCommon page="Careers"/>
      <main className="carrer">
        <div className="carrer-wrapper">
          <div className="carrer-wrapper__header">
            <p>Open  Positions</p>
          </div>
          <div className="carrer-container">
            {jobs.map((job, index) => <JobPost key={index} job={job}/>)}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Carrer;


const JobPost = ({job}) => {
  const {title, exp, location, link} = job;
  return (
    <div className="job-post">
      <div className="job-content">
        <p className="job-title">{title}</p>
        <p className="job-exp">({exp})</p>
      </div>
      <div className="job-location">
        <p>{location}</p>
      </div>
      <div className="apply-job">
        <a href={link} target="_blank">
          <Button buttonType="default">Get Job Insights</Button>
        </a>
      </div>
    </div>
  );
}