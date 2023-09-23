import React, { useState } from "react";

import styled from "styled-components";
import SwitchSubMenu from "./SwitchSubMenu";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const Container = styled.div`
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

const Image = styled.img`
  margin-right: 2rem;
`;

const Switch = styled.div`
  width: 35px;
  height: 18px;
  background-color: ${(props) => (props.switch ? "#4d7191" : "#545e6a")};
  margin-left: auto;
  border-radius: 10px;
  position: relative;
`;

const Toggle = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  left: ${(props) => (props.switch ? "18px" : "2px")};
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 10px;
  background-color: ${(props) => (props.switch ? "#90caf9" : "#e0e0e0")};
`;

const Sublist = styled.div`
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

const SwitchItem = ({ item }) => {
  const { icon, title, check, sublist } = item;
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const handleToggleSwitch = () => setToggleSwitch((prevState) => !prevState);

  return (
    <Section>
      <Container>
        <Image src={icon} alt={title} />
        <p>{title}</p>
        <Switch onClick={handleToggleSwitch} switch={toggleSwitch}>
          <Toggle switch={toggleSwitch} />
        </Switch>
      </Container>
      {sublist && toggleSwitch && (
        <Sublist>
          <ul>
            {sublist.map((item, index) => (
              <li key={index}>
                <SwitchSubMenu item={item} />
              </li>
            ))}
          </ul>
        </Sublist>
      )}
    </Section>
  );
};

export default SwitchItem;
