import React, { useState, useRef, useEffect } from 'react';

import styled from "styled-components";

const Container = styled.section`
    position: relative;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(https://i.ibb.co/Y75Zcf8/stats.jpg) no-repeat fixed center center/cover;
    background-position: center;
    padding: 10rem;
`;

const StatsContainer = styled.div`
   width: 80%;
   height: 100%;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
   gap: 2rem;
   place-items: center;
   margin: 0 auto;
   opacity: 1;
`;

const StatContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h3 {
        margin-bottom: 0;
        &::after {
            margin-top: -10px;
        }
    }
    p {
        font-size: 1.5rem;
        margin-top: 10px;
        font-weight: bold;
    }
`;

const data = [
    {title: "Happy Client", count: 30}, {title: "Years of Experience", count: 8},
    {title: "Projects", count: 70}, {title: "Team members", count: 50}
];

const StatsComponents = () => {
  return (
    <Container>
        <StatsContainer>
            {data.map((item, index) => <Stat key={index} item={item}/>)}
        </StatsContainer>
    </Container>
  )
}

export default StatsComponents;

const Stat = ({item}) => {
    const {count, title} = item
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [counter, setCounter] = useState(0);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let counter = (minimum, maximum) => {
            for (let count = minimum; count <= maximum; count++) {
                setTimeout(() => {
                    setCounter(count);
                }, 20 * (count - minimum));
            }
        }
        if(isIntersecting) {
            counter(0, count);
        }
    }, [isIntersecting]);

    return (
        <StatContainer ref={ref}>
            <h3 className='section-heading'><span className='heading-span'>{counter}</span></h3>
            <p>{title}</p>
        </StatContainer>
    );
}