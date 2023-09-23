import React, { useState } from "react";

import styled from "styled-components";

import SubMenu from "./SubMenu";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  padding: 1rem;
  color: "#eaeaeb";
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disable ? "" : "pointer")};
  border-radius: 5px;

  transition: all 0.15s;

  &:hover {
    background-color: ${(props) => (props.disable ? "" : "#262a31")};
  }

  p {
    font-size: 1.3rem;
    font-weight: bold;
  }

  span {
    background-color: #0084ff;
    margin-left: auto;
    padding: 0 0.3rem;
    font-size: 8px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 2px;
  }
`;

export const Image = styled.img`
  margin-right: 2rem;
`;

export const Sublist = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  padding: 1rem 0;

  span {
    color: #727b84;
    font-weight: bold;
  }

  ul {
    list-style: none;
  }
`;

const MapMainItem = ({ item }) => {
  const { icon, title, tag, disable, sublist } = item;
  const [active, setActive] = useState(true);

  const toggleActive = () => setActive((prevState) => !prevState);

  return (
    <Section>
      <Container disable={disable} onClick={toggleActive}>
        <Image src={icon} alt={title} />
        <p>{title}</p>
        {tag && <span>{tag}</span>}
      </Container>
      {active && sublist && (
        <Sublist>
          <span>Sort by</span>
          <ul>
            {sublist.map((item, index) => (
              <li key={index}>
                <SubMenu item={item} />
              </li>
            ))}
          </ul>
        </Sublist>
      )}
    </Section>
  );
};

export default MapMainItem;
