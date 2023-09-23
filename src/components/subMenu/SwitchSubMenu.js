import React, { useState } from "react";

import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #353535;
  cursor: pointer;

  p {
    font-size: 1.3rem;
    font-weight: bold;
  }

  img {
    transform: ${(props) =>
      props.active ? "rotate(90deg)" : "rotate(-90deg)"};
    margin-right: 0.5rem;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  color: #fff;
  cursor: pointer;

  p {
    font-size: 1.2rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #15181d;
  padding: 0.5rem;
  margin: 0.5rem 0;

  input {
    background-color: #15181d;
    border: none;
    width: 150px;
    outline: none;
    color: #84827f;
    padding-left: 3px;

    &:focus {
      outline: none;
    }
  }
`;

const SwitchSubMenu = ({ item }) => {
  const { title, list, type } = item;
  const [active, setActive] = useState(false);

  const handleToggleActive = () => setActive((prevState) => !prevState);

  return (
    <Section>
      <Container onClick={handleToggleActive} active={active}>
        <p>{title}</p>
        <img
          src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/Arrow.svg"
          alt="arrow"
        />
      </Container>
      {active && (
        <Options>
          {type === "name" && (
            <SearchBar>
              <input type="text" placeholder="Search by name" />
              <img
                src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/sidebar/search-icon.svg"
                alt="search"
              />
            </SearchBar>
          )}
          {list.map((item, index) => (
            <OptionItem key={index}>
              <p>{item}</p>
              {type === "category" && <input type="checkbox" />}
            </OptionItem>
          ))}
        </Options>
      )}
    </Section>
  );
};

export default SwitchSubMenu;
